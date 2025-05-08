import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root' // Singleton service
})

export class UserService {
  private http = inject(HttpClient);
  private readonly apiUrl = "https://jsonplaceholder.typicode.com/users";

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
