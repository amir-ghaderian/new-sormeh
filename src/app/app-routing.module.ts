import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SliderComponent } from './slider/slider.component';
import { MainlistComponent } from './mainlist/mainlist.component';
import { DetailclothComponent } from './detailcloth/detailcloth.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'slider',component:SliderComponent},
  {path:'',component:MainlistComponent},
  {path:'detail/:id',component:DetailclothComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})

export class AppRoutingModule { }
export const routingComponents=[LoginComponent,SignupComponent,SliderComponent,MainlistComponent,DetailclothComponent]