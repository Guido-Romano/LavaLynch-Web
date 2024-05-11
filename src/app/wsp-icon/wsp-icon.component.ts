import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-wsp-icon',
  templateUrl: './wsp-icon.component.html',
  styleUrls: ['./wsp-icon.component.css']
})
export class WspIconComponent {
  constructor(private elementRef: ElementRef) {
    setInterval(() => {
      this.vibrateIcon();
    }, 5000);
  }

  vibrateIcon() {
    const whatsappIcon = this.elementRef.nativeElement.querySelector('.whatsapp-icon-green');
    if (whatsappIcon) {
      whatsappIcon.classList.add('vibrating');
      setTimeout(() => {
        whatsappIcon.classList.remove('vibrating');
      }, 500);
    }
  }
}
