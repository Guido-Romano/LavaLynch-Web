import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortadaComponent } from './portada/portada.component';
import { TextComponent } from './text/text.component';
import { LogoComponent } from './portada/logo/logo.component';
import { MapComponent } from './map/map.component';
import { AutoComponent } from './auto/auto.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { WspIconComponent } from './wsp-icon/wsp-icon.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortadaComponent,
    TextComponent,
    LogoComponent,
    MapComponent,
    AutoComponent,
    CarouselComponent,
    FooterComponent,
    WspIconComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
