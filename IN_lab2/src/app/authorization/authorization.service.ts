import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user";

@Injectable()
export class AuthorizationService {

  constructor(private http: HttpClient) { }

  postData(user: User) {

    const body = { username: user.username, password: user.password };
    return this.http.post("https://localhost:7232/User/Login", body);
  }
}
