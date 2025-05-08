import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'user', component: UserComponent },
      { path: 'about/:id', component: AboutComponent },
      { path: '', redirectTo: '', pathMatch: 'full'}
    ]
  },
  {
    path: 'admin',
    loadChildren: () => 
      import('./admin.routes').then(m => m.adminRoutes),
  },
];
