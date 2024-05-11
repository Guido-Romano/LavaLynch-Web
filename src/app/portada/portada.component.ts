import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent  implements OnInit {
  videoElement!: HTMLVideoElement;
  constructor() { }

  ngOnInit(): void {
    this.videoElement = document.querySelector('.video-container video') as HTMLVideoElement;
    

    if (this.videoElement) {
      this.videoElement.muted = true;
      this.videoElement.play()
        .catch((error) => {
          console.error('Error al reproducir el video:', error);
        });
    }
  }
}

