import { Component } from '@angular/core';

@Component({
  selector: 'app-pictures-bottom',
  templateUrl: './pictures-bottom.component.html'
})
export class PicturesBottomComponent {
  images = [
    { src: '../assets/Captura001.webp', alt: 'Captura 001' },
    { src: '../assets/hobbies02.webp', alt: 'Hobbies 02' },
    { src: '../assets/Captura003.webp', alt: 'Captura 003' }
  ];
}
