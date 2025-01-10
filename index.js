import * as THREE from 'three';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { UnrealBloomPass } from 'three/examples/jsm/Addons.js';
import { OutputPass } from 'three/examples/jsm/Addons.js';
import { GUI } from 'dat.gui';

//--------INITIALIZATION--------//

//--------setting based on device performance--------//

// settings for PC
const performanceSettings = {
  FFTSIZE: 512,
  CUBE_SIZE_K: 0.3,
  BARS_SIZE_SCALE: 0.55,
  cameraZ: 550,
};

const userAgent = navigator.userAgent;
const isMobile =
  /Mobile|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
    userAgent,
  );

// setting for Mobile for better performance
if (isMobile) {
  performanceSettings.FFTSIZE = 128;
  performanceSettings.BARS_SIZE_SCALE = 0.2;
  performanceSettings.cameraZ = 40.18;
}

//--------setting based on device performance--------//

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  2000,
);

const CAMERA_ZOOM_BOUNDARY = [0, 1000];

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const renderScene = new RenderPass(scene, camera);
const composer = new EffectComposer(renderer);

const bloomPassParams = {
  strength: 0.7,
  radius: 0.2,
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

let DROP_THRESHOLD = 110;
let PULSATION = 0.001;
const COLOR_THRESHOLD = 1; // minimum frequency to trigger the color function

const getColorByAverageFrequency = (bar, averageFrequency, isPlaying) => {
  if (averageFrequency >= COLOR_THRESHOLD && isPlaying) {
    const k = averageFrequency >= DROP_THRESHOLD ? 0.12 : 0.03;
    const r = averageFrequency * k;
    const b = 1 / (averageFrequency * 0.003);
    return { ...bar.material.color, r, b };
  }
  return bar.material.color;
};

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

const LIGHT_INTENSITY = 150000;
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

const particlesCount = 8000;
const particlesGeometry = new THREE.BufferGeometry();
const positions = new Float32Array(particlesCount * 3);
for (let i = 0; i < particlesCount * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 2;
}
particlesGeometry.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(positions, 3),
);
const pointsMaterial = new THREE.PointsMaterial({
  size: 2,
  color: 'blue',
});
const particles = new THREE.Points(particlesGeometry, pointsMaterial);
particles.scale.x = 2000;
particles.scale.y = 1000;
particles.scale.z = 1000;
particles.position.x += 500;
scene.add(particles);

const CUBE_SIZE =
  (performanceSettings.FFTSIZE / 2 / camera.getFilmWidth()) *
  performanceSettings.CUBE_SIZE_K;
const BARS_GAP = 0;

const cubesParticlesCount = 10;
const cubesParticlesGeometry = new THREE.BufferGeometry();
const cubesParticlesPositions = new Float32Array(cubesParticlesCount * 3 * 2);

const gridSize = Math.cbrt(cubesParticlesCount * 2);
const spacing = 2 / (gridSize - 1);

let index = 0;
for (let x = 0; x < gridSize; x++) {
  for (let y = 0; y < gridSize; y++) {
    for (let z = 0; z < gridSize; z++) {
      if (index >= cubesParticlesCount * 2) break;
      // grid placement from -1 to 1
      cubesParticlesPositions[index * 3] = x * spacing - 1;
      cubesParticlesPositions[index * 3 + 1] = y * spacing - 1;
      cubesParticlesPositions[index * 3 + 2] = z * spacing - 1;
      // grid arrangement from -0.5 to 0.5
      cubesParticlesPositions[index * 3 + 3] = x * spacing * 0.5 - 0.5;
      cubesParticlesPositions[index * 3 + 4] = y * spacing * 0.5 - 0.5;
      cubesParticlesPositions[index * 3 + 5] = z * spacing * 0.5 - 0.5;
      index += 2;
    }
  }
}

cubesParticlesGeometry.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(cubesParticlesPositions, 3),
);
const cubeMaterial = new THREE.PointsMaterial({
  size: 5,
});
const cubes = [];
for (let i = 0; i < performanceSettings.FFTSIZE; i++) {
  cubes.push(new THREE.Points(cubesParticlesGeometry, cubeMaterial));
}

const startColor = getColorByAverageFrequency(cubes[0], 20, true);
let posX = -BARS_GAP * cubes.length;
for (let i = 0; i < cubes.length; i++) {
  scene.add(cubes[i]);
  cubes[i].material.setValues({
    color: startColor,
  });
  cubes[i].position.x += i * CUBE_SIZE + posX;
  posX += BARS_GAP;
}

camera.position.set(
  cubes[Math.round(cubes.length / 2)].position.x,
  cubes[Math.round(cubes.length / 2)].position.y,
  performanceSettings.cameraZ,
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
const audio = new THREE.Audio(listener);
const analyser = new THREE.AudioAnalyser(audio, performanceSettings.FFTSIZE);

//--------INITIALIZATION--------//

//--------EVENTS--------//

window.addEventListener('mousemove', (e) => {
  // if right mouse button clicked and mouse moving move camera along (x y) coordinates
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

// zoom by mouse wheel (z coordinate)
window.addEventListener('wheel', (e) => {
  const dz = e.deltaY * 0.15;
  if (
    camera.position.z + dz > CAMERA_ZOOM_BOUNDARY[0] &&
    camera.position.z + dz < CAMERA_ZOOM_BOUNDARY[1]
  ) {
    camera.translateZ(dz);
  }
});

// For PC
window.addEventListener('keydown', (e) => {
  if (e.code === 'Space' && audio.source && audio.isPlaying) audio.pause();
  else if (e.code === 'Space' && audio.source && !audio.isPlaying) audio.play();
});

// For Mobile
window.addEventListener('touchstart', (e) => {
  if (e.touches.length === 2 && audio.source && audio.isPlaying) audio.pause();
  else if (e.touches.length === 2 && audio.source && !audio.isPlaying)
    audio.play();
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

function animate() {
  const frequencyData = analyser.getFrequencyData();
  const averageFrequency = analyser.getAverageFrequency();

  // ! if we paint everything with the same color, then we can do 1 calculation, instead of calculating at each iteration
  const barColor = getColorByAverageFrequency(
    cubes[0],
    averageFrequency,
    audio.isPlaying,
  );

  /* ANIMATE PARTICLES */
  particles.material.color = barColor;

  particles.position.z = averageFrequency * averageFrequency * PULSATION;
  const d = particles.position.z > 0 ? -1 : 1;
  particles.scale.x = 2000 - Math.pow(particles.position.z, 2) * 0.005 * d;
  particles.scale.y = 1000 - Math.pow(particles.position.z, 2) * 0.005 * d;
  particles.scale.z = 1000 - Math.pow(particles.position.z, 2) * 0.005 * d;

  if (averageFrequency >= DROP_THRESHOLD) {
    particles.position.x += Math.random() > 0.5 ? 1 : -1;
    particles.position.y += Math.random() > 0.5 ? 1 : -1;
  } else if (audio.isPlaying) {
    particles.position.x += Math.random() > 0.5 ? 0.2 : -0.2;
    particles.position.y += Math.random() > 0.5 ? 0.2 : -0.2;
  }
  /* ANIMATE PARTICLES */

  /* ANIMATE BARS */
  for (let i = 0; i < frequencyData.length; i++) {
    cubes[i].material.setValues({
      color: barColor,
    });

    let y =
      CUBE_SIZE +
      frequencyData[frequencyData.length - i - 1] *
        performanceSettings.BARS_SIZE_SCALE;

    let z =
      CUBE_SIZE +
      frequencyData[frequencyData.length - i - 1] *
        performanceSettings.BARS_SIZE_SCALE;

    // left half
    cubes[i].scale.y = y;
    cubes[i].scale.z = z;

    y = CUBE_SIZE + frequencyData[i] * performanceSettings.BARS_SIZE_SCALE;
    z = CUBE_SIZE + frequencyData[i] * performanceSettings.BARS_SIZE_SCALE;

    // right half
    cubes[i + cubes.length / 2].scale.y = y;
    cubes[i + cubes.length / 2].scale.z = z;
  }
  /* ANIMATE BARS */

  composer.render();
}
renderer.setAnimationLoop(animate);

//--------ANIMATION--------//

//--------GUI--------//

const gui = new GUI();

const audioInput = document.createElement('input');
audioInput.type = 'file';
audioInput.accept = 'audio/*';
audioInput.style.display = 'none';

const audioParams = {
  offset: 0,
};

const getAudioOffset = () => {
  return audio.isPlaying ? audio.context.currentTime - audio.startTime : 0;
};

setInterval(() => {
  durationRange.setValue(Math.floor(getAudioOffset()));
  durationRange.updateDisplay();
}, 1000);

audioInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    audio.stop();
    audio.setBuffer(null);

    const url = URL.createObjectURL(file);
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load(url, (buffer) => {
      audio.setBuffer(buffer);
      audio.setLoop(true);
      audio.play();
    });

    audio.setBuffer(file);
    filePickerController.name(file.name);
    audio.startTime = audio.context.currentTime;
  }
});
document.body.appendChild(audioInput);

const fileFolder = gui.addFolder('Audio');
const filePickerController = fileFolder
  .add({ click: () => audioInput.click() }, 'click')
  .name('Choose file');

const durationRange = fileFolder.add(audioParams, 'offset', 0).name('Duration');

const effectsParams = {
  dropThreshold: DROP_THRESHOLD,
  barsSizeScale: performanceSettings.BARS_SIZE_SCALE,
  pulsation: PULSATION / 0.001,
};
const effectsFolder = gui.addFolder('Effects');
effectsFolder
  .add(effectsParams, 'dropThreshold', 0, 200, 1)
  .name('drop threshold')
  .onChange((value) => {
    DROP_THRESHOLD = value;
  });
effectsFolder
  .add(effectsParams, 'barsSizeScale', 0, 1)
  .name('bars size scale')
  .onChange((value) => {
    performanceSettings.BARS_SIZE_SCALE = value;
  });
effectsFolder
  .add(effectsParams, 'pulsation', -2, 2)
  .name('pulsation')
  .onChange((value) => {
    PULSATION = value * 0.001;
  });

const toneMappingFolder = gui.addFolder('Tone mapping');
toneMappingFolder
  .add(
    toneMappingParams,
    'toneMapping',
    Object.keys(toneMappingParams.toneMappingOptions),
  )
  .name('tone mapping')
  .onChange((optionName) => {
    renderer.toneMapping = toneMappingParams.toneMappingOptions[optionName];
  });
toneMappingFolder
  .add(toneMappingParams, 'toneMappingExposure', 0, 1)
  .name('mapping exposure')
  .onChange((value) => {
    renderer.toneMappingExposure = Number(value);
  });

const bloomFolder = gui.addFolder('Bloom');
bloomFolder.add(bloomPassParams, 'strength', 0, 1).onChange((value) => {
  bloomPass.strength = Number(value);
});
bloomFolder.add(bloomPassParams, 'radius', 0, 2).onChange((value) => {
  bloomPass.radius = Number(value);
});
bloomFolder.add(bloomPassParams, 'threshold', 0, 1).onChange((value) => {
  bloomPass.threshold = Number(value);
});

//--------GUI--------//
