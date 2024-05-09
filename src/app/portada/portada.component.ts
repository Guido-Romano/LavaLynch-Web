import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;

  ngOnInit(): void {
    // Verifica si el elemento de video está disponible
    if (this.videoElement) {
      // Reproducir el video automáticamente
      this.videoElement.nativeElement.play();
    }
  }
}

