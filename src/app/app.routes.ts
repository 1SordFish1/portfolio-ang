import { Routes } from '@angular/router';
import { Home } from './core/home/home';

export const routes: Routes = [
  {path:'', redirectTo: 'portfolio', pathMatch: 'full'},
  {path:'portfolio', component: Home},
];
