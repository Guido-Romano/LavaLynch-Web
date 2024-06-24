import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
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