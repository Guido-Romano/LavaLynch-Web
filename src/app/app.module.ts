import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TextComponent } from './text/text.component';
import { LogoComponent } from './logo/logo.component';
import { MapComponent } from './map/map.component';
import { AutoComponent } from './auto/auto.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { WspIconComponent } from './wsp-icon/wsp-icon.component';
import { FormComponent } from './form/form.component';

import { ReviewComponent } from './review/review.component';

import { MotionWordsBottomComponent } from './motion-words-bottom/motion-words-bottom.component';
import { BannerFormComponent } from './banner-form/banner-form.component';
import { MotionWordsTopComponent } from './motion-words-top/motion-words-top.component';
import { PicturesTopComponent } from './pictures-top/pictures-top.component';
import { PicturesBottomComponent } from './pictures-bottom/pictures-bottom.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TextComponent,
    LogoComponent,
    MapComponent,
    AutoComponent,
    CarouselComponent,
    FooterComponent,
    WspIconComponent,
    FormComponent,

    ReviewComponent,

    MotionWordsBottomComponent,
    BannerFormComponent,
    MotionWordsTopComponent,
    PicturesTopComponent,
    PicturesBottomComponent,
    FrontPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
