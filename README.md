# [Audio visualizer](https://radzivonn.github.io/3D-visualizer) on three js

## Overview
![image](https://github.com/user-attachments/assets/594139d5-5fa9-4d75-9d14-b23cfc8e6b6f)

## Settings
![image](https://github.com/user-attachments/assets/72f767ff-cd78-4a84-a019-47b0da06764a)

* Audio
  * Choose audio file button
  * Duration from start of audio
* Effects
  * Drop threshold - threshold value of the average frequency at which the color of the visualizer sharply turns red
  * Scale of bars max size along the y and z axes
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
