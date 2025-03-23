import { Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '' }
];
