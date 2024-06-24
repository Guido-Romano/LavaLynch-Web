import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  // Array con la información de las imágenes
  imagenes = [
    { src: '../assets/res01.webp', alt: 'Reseña 01', aos: 'fade-right' },
    { src: '../assets/res02.webp', alt: 'Reseña 02', aos: 'fade-left' },
    { src: '../assets/res03.webp', alt: 'Reseña 03', aos: 'fade-right' },
    { src: '../assets/res04.webp', alt: 'Reseña 04', aos: 'fade-left' }
  ];
}

