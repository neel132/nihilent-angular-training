import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root' // Singleton service
})

export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'Alice',
      email: 'alice@gmail.com',
    },
    {
      id: 2,
      name: 'John',
      email: 'john@gmail.com'
    },
    {
      id: 3,
      name: 'Test',
      email: 'test@gmail.com',
    },
  ];
  constructor() { }

  getUser(): User[] {
    return [...this.users];
  }

  removeUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}
