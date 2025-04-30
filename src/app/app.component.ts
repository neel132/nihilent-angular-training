import { Component, computed, signal } from '@angular/core';
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
  isVisible = signal<boolean>(false);
  inputType = computed(() => this.isVisible() ? 'text' : 'password'); // computed is read-only which has only single job to read the signals
  toggleVisibility() {
    // some logic to toggle
    this.isVisible.update((value) => !value);
  }
}
