//app.component.ts
import { Component, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UnlessDirective } from './directives/unless.directive';
import { HighlightDirective } from './directives/appHighlight.directive';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UnlessDirective, HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private logger = inject(LoggerService);
  users = [
    {
      name: 'Alice',
    },
    {
      name: 'John',
    },
    {
      name: 'Test',
    }
  ];
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
