import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AuthorizationService } from "../authorization.service";
import { User } from "../user";
import { Jwt } from "../jwt";

@Component({
  selector: "sign-in",
  standalone: true,
  imports: [RouterLink, HttpClientModule, FormsModule],
  templateUrl: './sign-in.component.html',
  providers: [AuthorizationService]
})
export class SignInComponent {
  user: User = new User("", "");
  constructor(private httpService: AuthorizationService) { }

  submit(user: User) {
    this.httpService.postData(user)
      .subscribe({
        next: (data: any) => { console.log(data.token) },
        error: error => console.log(error)
      });
  }

}
