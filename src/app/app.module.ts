import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from './_modal';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SliderComponent } from './slider/slider.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { MainlistComponent } from './mainlist/mainlist.component';
import { ConnectorService } from './connector.service';
import { DetailclothComponent } from './detailcloth/detailcloth.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    SliderComponent,
    MainlistComponent,
    DetailclothComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule,
    NgImageSliderModule ,
    FormsModule
  ],
  providers: [
    ConnectorService
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
