import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
  
import { HomeComponent } from './home/home.component';
import { LoginComponent} from './login/login.component'; 
import {AuthGuard} from './_helpers'; 
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { CheckupComponent } from './checkup/checkup.component';

const routes: Routes = [
   {
    path: 'login', component: LoginComponent
  },
  {
    path: 'checkup', component: CheckupComponent, data: { title: 'Songs'}
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
},
    // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
