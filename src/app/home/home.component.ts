import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { LoggerService } from '../services/logger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  username = signal<string>('');
  password = signal<string>('');
  errorMessage = signal<string>('');

  private auth = inject(AuthService);
  private logger = inject(LoggerService);
  private router = inject(Router);
  onLogin() {
    const success = this.auth.login(this.username(), this.password());
    this.logger.log(`success - ${success}`);
    if(success) {
      // navigate to admin route
      this.router.navigate(['/admin']);
    } else {
      this.errorMessage.set('Invalid credentials');
    }
  }
}
