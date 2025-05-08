import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  private userService = inject(UserService);
  users$!: Observable<User[]> // $ - for observable, ! - for typescript assertion

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }

}
