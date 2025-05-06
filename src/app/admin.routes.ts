import { Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { authGuard } from "./auth.guard";

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [authGuard],
  },
];
