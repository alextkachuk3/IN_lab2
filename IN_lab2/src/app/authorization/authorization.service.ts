import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user";
import { Router } from "@angular/router";

@Injectable()
export class AuthorizationService {

  constructor(private http: HttpClient, private router: Router) { }

  postData(user: User) {
    const body = { username: user.username, password: user.password };
    return this.http.post("https://localhost:7232/User/Login", body);
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['signin']);
  }
}
