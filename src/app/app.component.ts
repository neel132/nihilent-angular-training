//app.component.ts
import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
  status = signal<boolean>(true);
  isVisible = signal<boolean>(false);
  password = signal<string>('');
  confirmPassword = signal<string>('');
  inputType = computed(() => this.isVisible() ? 'text' : 'password'); // computed is read-only which has only single job to read the signals
  passwordsDoNotMatch = computed(() => this.password() && this.confirmPassword() && this.password() !== this.confirmPassword())
  constructor() {
    effect(() => {
      console.log('Signal is been modified -', this.isVisible());
    });
  }
  ngOnInit(): void {
    console.log("ngOnInit triggered !!!");
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
