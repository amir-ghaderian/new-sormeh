import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SliderComponent } from './slider/slider.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { MainlistComponent } from './mainlist/mainlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    SliderComponent,
    MainlistComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule 
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
