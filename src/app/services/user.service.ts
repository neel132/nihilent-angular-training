import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, User } from '../models/user.model';
@Injectable({
  providedIn: 'root' // Singleton service
})

export class UserService {
  private http = inject(HttpClient);
  private readonly apiUrl = "https://jsonplaceholder.typicode.com/users";
  private readonly apiUrlPosts = "https://jsonplaceholder.typicode.com/posts";

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrlPosts, post);
  }
}
