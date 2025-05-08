import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { Post, User } from '../models/user.model';

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
  post: Post = {
    id: 0,
    title: 'Sample title',
    body: 'Sample body',
    userId: 1,
  }
  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
    this.submitPost();
  }

  submitPost() {
    this.userService.createPost(this.post).subscribe({
      next: res => console.log("Response -", res),
      error: err => console.error('Error -', err)
    })
  }
}
