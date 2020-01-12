import { Routes, RouterModule } from '@angular/router';

// Auth 
import { AuthGuard } from './_helpers';
import { Role } from './_models';

// Components
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login';
import { CheckupComponent } from './checkup/checkup.component'

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'checkup',
        component: CheckupComponent,
    },
    {
        path: 'login',
        component: LoginComponent
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);