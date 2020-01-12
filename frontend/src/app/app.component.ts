import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User, Role } from './_models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CANDetech';

  currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    get isDoctor() {
        return this.currentUser && this.currentUser.role === Role.Doctor;
    }

    get isPatient() {
        return this.currentUser && this.currentUser.role === Role.Patient;
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
