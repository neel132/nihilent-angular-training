import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, User } from '../models/user.model';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root' // Singleton service
})

export class UserService {
  private http = inject(HttpClient);
  private baseUrl = environment.baseUrl;

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}users`);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.baseUrl}posts`, post);
  }
}
