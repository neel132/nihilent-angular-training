import { Component, signal } from '@angular/core';
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
  title = 'Counter App Example';
  count = signal(0);

  increment() {
    console.log("Increment method called !");
    this.count.update(value => value + 1);
  }

  decrement() {
    console.log("Decrement method called !");
    this.count.update(value => value && value - 1);
  }

  reset() {
    console.log("Reset method called !");
    this.count.set(0);
  }

}
