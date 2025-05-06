import { inject } from "@angular/core"
import { AuthService } from "./services/auth.service"
import { CanActivateFn, Router } from "@angular/router";

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if(!auth.isLoggedIn()) {
    router.navigate(['/']);
    return false;
  }
  return true;
}