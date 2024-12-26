# [Audio visualizer](https://radzivonn.github.io/3D-visualizer) on three js

## Overview
![image](https://github.com/user-attachments/assets/0b9fd71f-f051-45b1-b54e-39bfe1f4adce)

![image](https://github.com/user-attachments/assets/03447aa7-7ff5-4e55-b24f-00893c8f9cf3)

Drop(drop threshold adjusts the "red" trigger threshold): ![image](https://github.com/user-attachments/assets/115f5b84-0426-46b8-9dd8-d0cb63063e30)

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
