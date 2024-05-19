// src/app/services/reqres.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ReqresService {
  private apiUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<{ data: User[] }> {
    return this.http.get<{ data: User[] }>(`${this.apiUrl}/users?page=2`);
  }

  getUser(id: number): Observable<{ data: User }> {
    return this.http.get<{ data: User }>(`${this.apiUrl}/users/${id}`);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/users/${id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/users/${id}`);
  }

  getResources(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/unknown`);
  }
}

// getResources(): Observable<any> {
//   return this.http.get<any>(`${this.apiUrl}/unknown`);
// }
