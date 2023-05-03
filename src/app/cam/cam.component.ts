import { Component } from '@angular/core';
@Component({
  selector: 'app-cam',
  templateUrl: './cam.component.html',
  styleUrls: ['./cam.component.css']
})
export class CamComponent {
  // async takePicture() {
  //   const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  //   const video = document.createElement('video');
  //   video.srcObject = stream;
  //   video.play();

  //   const canvas = document.createElement('canvas');
  //   canvas.width = video.videoWidth;
  //   canvas.height = video.videoHeight;

  //   const dataURL = canvas.toDataURL('image/png');
  //   console.log(dataURL);

  //   stream.getTracks().forEach((track) => track.stop());
  // }
  openCamera() {
    const video = document.querySelector('video');
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
    //  video.srcObject = stream;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
