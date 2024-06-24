import { Component } from '@angular/core';

@Component({
  selector: 'app-pictures-top',
  templateUrl: './pictures-top.component.html',
  styleUrls: ['./pictures-top.component.css']
})
export class PicturesTopComponent {
  images = [
    { src: '../assets/hobbies01.webp', alt: 'Imagen de hobbies' },
    { src: '../assets/captura002.webp', alt: 'Captura de pantalla 002' },
    { src: '../assets/hobbies03.webp', alt: 'Imagen de hobbies 03' }
  ];
}
