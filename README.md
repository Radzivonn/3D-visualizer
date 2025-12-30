# [Audio visualizer](https://radzivonn.github.io/3D-visualizer) on three js

## Overview
![2025-12-30 21-22-52 remuxed](https://github.com/user-attachments/assets/e76f0681-99a7-49af-991c-d8898e4b5205)

## Settings
<img width="335" height="971" alt="image" src="https://github.com/user-attachments/assets/4fdd16d1-516f-4c2f-b78f-f3ed5217abb0" />

* Audio
  * Choose audio file button
  * Duration from start of audio\
  * Audio controls
* Equalizer Effects
* Particles Effects
* Tone mapping
  * Tone mapping - type of tone mapping
  * Tone mapping exposure
* Bloom
    * Strength
    * Radius
    * Threshold

## Сontrol
* Mouse wheel controls zoom out/zoom (z axis)
* Hold down the right mouse button and move the mouse - move the camera along the x, y axes
* Spacebar (for PC) or tap with two fingers on the screen (for mobile devices) - pause audio

Remark: On mobile devices the visualizer “resolution” is automatically reduced for better performance and sufficient FPS. FFTSIZE decreases from 512 to 128

## Stack
* Vanilla JS
* [Vite](https://vite.dev)
* [Three JS](https://threejs.org)
* [Dat GUI](https://github.com/dataarts/dat.gui)
