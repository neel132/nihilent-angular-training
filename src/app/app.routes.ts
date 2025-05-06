import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { authGuard } from './auth.guard';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: ':id', component: AboutComponent },
      { path: '', redirectTo: '', pathMatch: 'full'}
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authGuard],
  },
];
