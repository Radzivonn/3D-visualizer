import * as THREE from 'three';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { UnrealBloomPass } from 'three/examples/jsm/Addons.js';
import { OutputPass } from 'three/examples/jsm/Addons.js';

const FFTSIZE = 512;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  2000,
);

const CAMERA_ZOOM_BOUNDARY = [0, 800];

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const renderScene = new RenderPass(scene, camera);
const composer = new EffectComposer(renderer);

const bloomPassParams = {
  strength: 0.7,
  radius: 0.15,
  threshold: 0.1,
};
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window, innerHeight),
  bloomPassParams.strength,
  bloomPassParams.radius,
  bloomPassParams.threshold,
);

const outputPass = new OutputPass();
composer.addPass(renderScene);
composer.addPass(bloomPass);
composer.addPass(outputPass);

const toneMappingParams = {
  toneMapping: 'NeutralToneMapping',
  toneMappingOptions: {
    NoToneMapping: THREE.NoToneMapping,
    LinearToneMapping: THREE.LinearToneMapping,
    ReinhardToneMapping: THREE.ReinhardToneMapping,
    CineonToneMapping: THREE.CineonToneMapping,
    ACESFilmicToneMapping: THREE.ACESFilmicToneMapping,
    AgXToneMapping: THREE.AgXToneMapping,
    NeutralToneMapping: THREE.NeutralToneMapping,
  },
  toneMappingExposure: 0.25,
};
renderer.toneMapping =
  toneMappingParams.toneMappingOptions[toneMappingParams.toneMapping];
renderer.toneMappingExposure = toneMappingParams.toneMappingExposure;

const LIGHT_INTENSITY = 120000;
const LIGHT_DISTANCE = 1000;

const lightTop = new THREE.PointLight(
  0xffffff,
  LIGHT_INTENSITY,
  LIGHT_DISTANCE,
);
const lightBottom = new THREE.PointLight(
  0xffffff,
  LIGHT_INTENSITY,
  LIGHT_DISTANCE,
);
const lightLeft = new THREE.PointLight(
  0xffffff,
  LIGHT_INTENSITY,
  LIGHT_DISTANCE,
);
const lightRight = new THREE.PointLight(
  0xffffff,
  LIGHT_INTENSITY,
  LIGHT_DISTANCE,
);

const CUBE_SIZE = (FFTSIZE / 2 / camera.getFilmWidth()) * 0.3;
const BARS_GAP = 0;
const cubeGeometry = new THREE.BoxGeometry(CUBE_SIZE, CUBE_SIZE, CUBE_SIZE);
const cubeMaterial = new THREE.MeshStandardMaterial({
  color: 0xff00ff,
  wireframe: false,
});
const cubes = [];
for (let i = 0; i < FFTSIZE; i++) {
  cubes.push(new THREE.Mesh(cubeGeometry, cubeMaterial));
}

let posX = -BARS_GAP * cubes.length;
for (let i = 0; i < cubes.length; i++) {
  scene.add(cubes[i]);
  cubes[i].position.x += i * CUBE_SIZE + posX;
  posX += BARS_GAP;
}

camera.position.set(
  cubes[Math.round(cubes.length / 2)].position.x,
  cubes[Math.round(cubes.length / 2)].position.y,
  550,
);
lightTop.position.set(
  cubes[Math.round(cubes.length / 2)].position.x,
  cubes[Math.round(cubes.length / 2)].position.y + 300,
  cubes[Math.round(cubes.length / 2)].position.z + 200,
);
lightBottom.position.set(
  cubes[Math.round(cubes.length / 2)].position.x,
  cubes[Math.round(cubes.length / 2)].position.y - 300,
  cubes[Math.round(cubes.length / 2)].position.z + 200,
);
lightLeft.position.set(
  cubes[0].position.x,
  cubes[0].position.y + 250,
  cubes[0].position.z + 200,
);
lightRight.position.set(
  cubes[cubes.length - 1].position.x,
  cubes[0].position.y + 250,
  cubes[0].position.z + 200,
);
scene.add(lightTop, lightBottom, lightLeft, lightRight);

const listener = new THREE.AudioListener();
camera.add(listener);
const sound = new THREE.Audio(listener);
const audioLoader = new THREE.AudioLoader();
const analyser = new THREE.AudioAnalyser(sound, FFTSIZE);

//--------EVENTS--------//
window.addEventListener('mousemove', (e) => {
  // if right mouse button clicked and mouse moving
  if (e.buttons === 2) {
    let mouseX = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;
    if (e.clientX < windowHalfX) {
      mouseX = e.clientX - windowHalfX;
    } else mouseX = (e.clientX - windowHalfX) * 2;
    const mouseY = e.clientY - windowHalfY;
    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (-mouseY - camera.position.y) * 0.5;
    camera.lookAt(cubes[Math.round(cubes.length / 2)].position);
  }
});

window.addEventListener('contextmenu', (e) => e.preventDefault());

window.addEventListener('wheel', (e) => {
  const dz = e.deltaY * 0.15;
  if (
    camera.position.z + dz > CAMERA_ZOOM_BOUNDARY[0] &&
    camera.position.z + dz < CAMERA_ZOOM_BOUNDARY[1]
  ) {
    camera.translateZ(dz);
  }
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
//--------EVENTS--------//

//--------ANIMATION--------//
let DROP_THRESHOLD = 110;
let BARS_HEIGHT_SCALE = 0.5;

const getColorByAverageFrequency = (bar, averageFrequency, threshold) => {
  if (averageFrequency > threshold) {
    const k = averageFrequency >= DROP_THRESHOLD ? 0.12 : 0.03;
    const r = averageFrequency * k;
    const b = 1 / (averageFrequency * 0.003);
    return { ...bar.material.color, r, b };
  }
  return bar.material.color;
};

function animate() {
  const frequencyData = analyser.getFrequencyData();
  const averageFrequency = analyser.getAverageFrequency();
  // ! if we paint everything with the same color, then we can do 1 calculation, instead of calculating at each iteration
  const barColor = getColorByAverageFrequency(cubes[0], averageFrequency, 5);

  for (let i = 0; i < frequencyData.length; i++) {
    if (frequencyData[frequencyData.length - i - 1] === 0) {
      frequencyData[frequencyData.length - i - 1] = 5;
    }

    cubes[i].material.setValues({
      color: barColor,
    });

    cubes[i].scale.y =
      CUBE_SIZE +
      frequencyData[frequencyData.length - i - 1] * BARS_HEIGHT_SCALE;
    cubes[i].scale.z =
      CUBE_SIZE +
      frequencyData[frequencyData.length - i - 1] * BARS_HEIGHT_SCALE;
  }

  for (let i = 0; i < frequencyData.length; i++) {
    if (frequencyData[frequencyData.length - i - 1] === 0) {
      frequencyData[frequencyData.length - i - 1] = 5;
    }

    cubes[i].material.setValues({
      color: barColor,
    });

    cubes[i + cubes.length / 2].scale.y =
      CUBE_SIZE + frequencyData[i] * BARS_HEIGHT_SCALE;
    cubes[i + cubes.length / 2].scale.z =
      CUBE_SIZE + frequencyData[i] * BARS_HEIGHT_SCALE;
  }

  composer.render();
}
renderer.setAnimationLoop(animate);
//--------ANIMATION--------//
