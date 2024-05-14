import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('pElement') pElement!: ElementRef;

  title = 'lavalynch-2.0';

  ngOnInit() {
    AOS.init()
    window.addEventListener('load',AOS.refresh)
  }
}
