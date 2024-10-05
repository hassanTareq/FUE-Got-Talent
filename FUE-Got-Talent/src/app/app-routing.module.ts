import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { InetialHomeComponent } from './components/inetial-home/inetial-home.component';
import { LoginComponent } from './components/login/login.component';
import { SpecialisthomeComponent } from './components/specialisthome/specialisthome.component';
import { VideoDisplayComponent } from './components/video-display/video-display.component';
import { SignupComponent } from './components/signup/signup.component';

// const redirectToLogin = ()=> redirectUnauthorizedTo(['login']);
// const redirectToHome = ()=> redirectLoggedInTo(['login/home']);

const routes: Routes = [
  {
    path:'',
    component:InetialHomeComponent
  },
 {
  path:'login',
  component:LoginComponent,
 },
 {
  path:'login/home',
  component:SpecialisthomeComponent,
 },
 {
  path:'login/home/video/:DocID',
  component:VideoDisplayComponent
 },
 {
  path:'login/signup',
  component:SignupComponent,
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
