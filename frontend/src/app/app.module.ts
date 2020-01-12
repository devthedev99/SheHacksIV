// Dependencies
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// hardcoded backend to test role based authorization
import { fakeBackendProvider } from './_helpers';

// Routing
import { appRoutingModule } from './app.routing';
import { RouterModule} from'@angular/router'; 
import { AppRoutingModule } from './app-routing.module';

// Auth 
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CheckupComponent } from './checkup/checkup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent,
    UserProfileComponent,
    CheckupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    appRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // provider used to create fake backend
    fakeBackendProvider
],
bootstrap: [AppComponent],
schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
