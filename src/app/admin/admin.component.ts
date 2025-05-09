import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  private auth = inject(AuthService);
  private router = inject(Router)

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
