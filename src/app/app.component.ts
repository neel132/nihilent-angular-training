//app.component.ts
import { Component, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UnlessDirective } from './directives/unless.directive';
import { HighlightDirective } from './directives/appHighlight.directive';
import { LoggerService } from './services/logger.service';
import { User, UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UnlessDirective, HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private logger = inject(LoggerService);
  private userService = inject(UserService);
  users: User[] = [];
  today = new Date();
  status = signal<boolean>(false);
  isVisible = signal<boolean>(false);
  password = signal<string>('');
  confirmPassword = signal<string>('');
  inputType = computed(() => this.isVisible() ? 'text' : 'password'); // computed is read-only which has only single job to read the signals
  passwordsDoNotMatch = computed(() => this.password() && this.confirmPassword() && this.password() !== this.confirmPassword())
  constructor() {
    effect(() => {
      this.logger.log('Signal is been modified -');
    });
  }
  ngOnInit(): void {
    this.logger.log("ngOnInit triggered !!!");
    this.loadUsers();
  }

  loadUsers() {
    this.users = this.userService.getUser();
  }

  toggleVisibility() {
    // some logic to toggle
    this.isVisible.update((value) => !value);
  }
  onChangePassword(event: Event) {
    const input = event.target as HTMLInputElement;
    this.password.set(input.value);
  }
  onChangeConfirmPassword(event: Event) {
    const input = event.target as HTMLInputElement;
    this.confirmPassword.set(input.value);
  }
  
}
