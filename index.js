import * as THREE from 'three';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { UnrealBloomPass } from 'three/examples/jsm/Addons.js';
import { OutputPass } from 'three/examples/jsm/Addons.js';
import { GUI } from 'dat.gui';
import { getParticleSystem } from './getParticleSystem.js';

//--------INITIALIZATION--------//

//--------setting based on device performance--------//

// settings for PC
const performanceSettings = {
  FFTSIZE: 512,
};

const userAgent = navigator.userAgent;
const isMobile =
  /Mobile|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
    userAgent,
  );

// setting for Mobile for better performance
if (isMobile) {
  performanceSettings.FFTSIZE = 256;
  performanceSettings.BARS_PARTICLES_SIZE = 1;
}

//--------setting based on device performance--------//

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  4000,
);

camera.position.set(0, -2, 20);
camera.lookAt(0, 0, 0);

const CAMERA_ZOOM_BOUNDARY = [0, 32]; // !!!

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

let AudioStartTime = 0; // for player
let DROP_THRESHOLD = 200;
let PARTICLES_SPEED = 1.0;
let PULSATION = 2.0;
let isDynamicBloomOn = true;
let isDynamicEqualizerColorOn = true;
let isDynamicParticlesColorOn = true;
const COLOR_THRESHOLD = 1; // minimum frequency to trigger the color function

const getColorByAverageFrequency = (color, averageFrequency, isPlaying) => {
  if (averageFrequency >= COLOR_THRESHOLD && isPlaying) {
    const k = averageFrequency >= DROP_THRESHOLD ? 0.12 : 0.025;
    const r = averageFrequency * k;
    const b = 1 / (averageFrequency * 0.002);
    return { ...color, r, b };
  }
  return color;
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

const listener = new THREE.AudioListener();
camera.add(listener);
const audio = new THREE.Audio(listener);
const analyser = new THREE.AudioAnalyser(audio, performanceSettings.FFTSIZE);

////////////////////////////////////////////////////////////////////////////!

const uniforms = {
  u_time: { type: 'f', value: 0.0 },
  u_frequency: { type: 'f', value: 0.0 },
  u_kickThreshold: { type: 'f', value: 0.7 },
  u_red: { type: 'f', value: 0.25 },
  u_green: { type: 'f', value: 0.0 },
  u_blue: { type: 'f', value: 1.0 },
};

const sphereMaterial = new THREE.ShaderMaterial({
  uniforms,
  vertexShader: document.getElementById('vertexshader').textContent,
  fragmentShader: document.getElementById('fragmentshader').textContent,
});

const geo = new THREE.IcosahedronGeometry(8, 30);
const mesh = new THREE.Mesh(geo, sphereMaterial);
scene.add(mesh);
mesh.material.wireframe = true;

const particles = getParticleSystem({
  camera,
  parent: scene,
  rate: 80.0,
  texture: 'img/circle.png',
});

//--------INITIALIZATION--------//

//--------FUNCTIONS--------//

const audioControls = {
  play: function () {
    if (!audio.isPlaying) resumeAudio();
  },
  pause: function () {
    if (audio.isPlaying) pauseAudio();
  },
  stop: function () {
    audio.stop();
    AudioStartTime = 0;
  },
  seek: 0,
  currentTime: '0:00',
  duration: '0:00',
};

const pauseAudio = () => {
  audio.pause();
  audio.context.suspend();
  AudioStartTime = audio.context.currentTime - AudioStartTime;
};

const resumeAudio = () => {
  playFrom(AudioStartTime);
  audio.context.resume();
};

const playFrom = (time) => {
  audio.stop();
  audio.source = audio.context.createBufferSource();
  audio.source.buffer = audio.buffer;
  audio.source.connect(audio.gain);
  audio.source.loop = true;

  AudioStartTime = audio.context.currentTime - time;

  audio.source.start(0, time);
  audio.isPlaying = true;
};

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const updateUI = () => {
  if (audio.buffer) {
    const currentTime = audio.context.currentTime - AudioStartTime;

    if (currentTime >= audio.buffer.duration) {
      AudioStartTime = audio.context.currentTime;
      audioControls.currentTime = '0:00';
      audioControls.seek = 0;
      seekController.updateDisplay();
    } else if (currentTime && audio.isPlaying) {
      const time = formatTime(currentTime);
      audioControls.currentTime = time;
      audioControls.seek = (currentTime / audio.buffer.duration) * 100;
      seekController.updateDisplay();
    }
  }
};

//--------FUNCTIONS--------//

//--------EVENTS--------//

window.addEventListener('mousemove', (e) => {
  // if right mouse button clicked and mouse moving move camera along (x y) coordinates
  if (e.buttons === 2) {
    // let mouseX = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;
    const mouseX = (e.clientX - windowHalfX) * 0.03;
    const mouseY = (e.clientY - windowHalfY) * 0.03;
    camera.position.x += mouseX - camera.position.x;
    camera.position.y += -mouseY - camera.position.y;
    camera.lookAt(0, 0, 0);
  }
});

window.addEventListener('contextmenu', (e) => e.preventDefault());

// zoom by mouse wheel (z coordinate)
window.addEventListener('wheel', (e) => {
  const dz = e.deltaY * 0.015;
  if (
    camera.position.z + dz > CAMERA_ZOOM_BOUNDARY[0] &&
    camera.position.z + dz < CAMERA_ZOOM_BOUNDARY[1]
  ) {
    camera.translateZ(dz);
  }
});

// For PC
window.addEventListener('keydown', (e) => {
  if (e.code === 'Space' && audio.source && audio.isPlaying) {
    pauseAudio();
  } else if (e.code === 'Space' && audio.source && !audio.isPlaying) {
    resumeAudio();
  }
});

// For Mobile
window.addEventListener('touchstart', (e) => {
  if (e.touches.length === 2 && audio.source && audio.isPlaying) {
    pauseAudio();
  } else if (e.touches.length === 2 && audio.source && !audio.isPlaying) {
    resumeAudio();
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

let DEFAULT_EQUALIZER_COLOR = {
  r: 1,
  g: 1,
  b: 1,
};
let DEFAULT_PARTICLES_COLOR = {
  r: 1,
  g: 1,
  b: 1,
};
const clock = new THREE.Clock();

function animate() {
  const averageFrequency = analyser.getAverageFrequency();

  const averageColor = getColorByAverageFrequency(
    {
      r: uniforms.u_red.value,
      g: uniforms.u_green.value,
      b: uniforms.u_blue.value,
    },
    averageFrequency,
    audio.isPlaying,
  );

  /* ANIMATE BLOOM AND MAPPING EXPOSURE */
  if (audio.isPlaying && isDynamicBloomOn) {
    bloomPass.strength = averageFrequency * 0.001;
    renderer.toneMappingExposure = averageFrequency * 0.007;
  }
  /* ANIMATE BLOOM AND MAPPING EXPOSURE */

  /* ANIMATE SPHERE */
  if (audio.isPlaying) {
    const currentColor = isDynamicEqualizerColorOn
      ? averageColor
      : DEFAULT_EQUALIZER_COLOR;
    uniforms.u_red.value = currentColor.r;
    uniforms.u_green.value = currentColor.g;
    uniforms.u_blue.value = currentColor.b;
  }
  uniforms.u_time.value = clock.getElapsedTime();
  uniforms.u_frequency.value = averageFrequency;
  /* ANIMATE SPHERE */

  particles.update(
    0.05,
    averageFrequency,
    isDynamicParticlesColorOn ? averageColor : DEFAULT_PARTICLES_COLOR,
    PARTICLES_SPEED,
    PULSATION,
  );

  updateUI();
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

audioInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    audio.stop();
    audio.setBuffer(null);

    const url = URL.createObjectURL(file);
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load(url, (buffer) => {
      audioControls.duration = formatTime(buffer.duration);
      audio.setBuffer(buffer);
      audio.setLoop(true);
      audio.setVolume(1);
      audio.play();
    });

    filePickerController.name(file.name);
    audio.AudioStartTime = audio.context.currentTime;
    AudioStartTime = audio.context.currentTime;
  }
});
document.body.appendChild(audioInput);

const filePickerController = gui
  .add({ click: () => audioInput.click() }, 'click')
  .name('Choose file');

const effectsParams = {
  dynamicBloom: isDynamicBloomOn, // Dynamic changing bloom and mapping exposure frequency dependent
  dynamicEqualizerColor: isDynamicEqualizerColorOn, // Dynamic changing equalizer color frequency dependent
  dynamicParticlesColor: isDynamicParticlesColorOn, // Dynamic changing particles color frequency dependent
  equalizerColor: DEFAULT_EQUALIZER_COLOR,
  particlesColor: DEFAULT_PARTICLES_COLOR,
  dropThreshold: DROP_THRESHOLD,
  particlesSpeed: PARTICLES_SPEED,
  pulsation: PULSATION,
  smoothing: 0.8,
};
const effectsFolder = gui.addFolder('Equalizer Effects');
effectsFolder
  .add(effectsParams, 'dynamicBloom')
  .name('Dynamic bloom')
  .onChange((value) => {
    isDynamicBloomOn = value;
  });
effectsFolder
  .add(effectsParams, 'dynamicEqualizerColor')
  .name('Dynamic color')
  .onChange((value) => {
    isDynamicEqualizerColorOn = value;
  });
effectsFolder
  .addColor(effectsParams, 'equalizerColor')
  .name('Default equalizer color')
  .onChange((color) => {
    DEFAULT_EQUALIZER_COLOR = color;
  });
effectsFolder
  .add(effectsParams, 'dropThreshold', 0, 200, 1)
  .name('drop threshold')
  .onChange((value) => {
    DROP_THRESHOLD = value;
  });
effectsFolder
  .add(effectsParams, 'smoothing', 0, 0.99, 0.01)
  .onChange((value) => {
    analyser.analyser.smoothingTimeConstant = value;
  });

const particlesEffectsFolder = gui.addFolder('Particles Effects');
particlesEffectsFolder
  .add(effectsParams, 'dynamicParticlesColor')
  .name('Dynamic color')
  .onChange((value) => {
    isDynamicParticlesColorOn = value;
  });
particlesEffectsFolder
  .addColor(effectsParams, 'particlesColor')
  .name('Default equalizer color')
  .onChange((color) => {
    DEFAULT_PARTICLES_COLOR = color;
  });
particlesEffectsFolder
  .add(effectsParams, 'particlesSpeed', 0, 2)
  .name('acceleration')
  .onChange((value) => {
    PARTICLES_SPEED = value;
  });
particlesEffectsFolder
  .add(effectsParams, 'pulsation', 0.1, 2.5)
  .name('pulsation')
  .onChange((value) => {
    PULSATION = value;
  });

const toneMappingFolder = gui.addFolder('Tone Mapping');
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

const controlsFolder = gui.addFolder('Controls');

controlsFolder.add(audioControls, 'play').name('Play');
controlsFolder.add(audioControls, 'pause').name('Pause');
controlsFolder.add(audioControls, 'stop').name('Stop');

const seekController = controlsFolder
  .add(audioControls, 'seek', 0, 100)
  .onChange((value) => {
    if (audio.buffer) {
      const time = (value / 100) * audio.buffer.duration;
      if (audio.isPlaying) playFrom(time);
    }
  })
  .name('Progress(%)');

controlsFolder.add(audioControls, 'currentTime').name('Current Time').listen();
controlsFolder.add(audioControls, 'duration').name('Duration').listen();
//--------GUI--------//
