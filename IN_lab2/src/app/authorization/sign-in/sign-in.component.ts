import { Component } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AuthorizationService } from "../authorization.service";
import { User } from "../user";

@Component({
  selector: "sign-in",
  standalone: true,
  imports: [RouterLink, HttpClientModule, FormsModule],
  templateUrl: './sign-in.component.html',
  providers: [AuthorizationService]
})
export class SignInComponent {
  user: User = new User("", "");
  constructor(private authService: AuthorizationService, private router: Router) { }

  submit(user: User) {
    this.authService.postSignIn(user)
      .subscribe({
        next: (data: any) => { this.authService.saveToken(data.token); console.log(data.token); this.router.navigate(['']) },
        error: error => console.log(error)
      });
  }
}
