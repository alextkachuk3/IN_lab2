import { Component } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AuthorizationService } from "../authorization.service";
import { User } from "../user";

@Component({
  selector: "sign-up",
  standalone: true,
  imports: [RouterLink, HttpClientModule, FormsModule],
  templateUrl: './sign-up.component.html',
  providers: [AuthorizationService]
})
export class SignUpComponent {
  user: User = new User("", "");
  constructor(private authService: AuthorizationService, private router: Router) { }

  submit(user: User) {
    this.authService.postSignUp(user)
      .subscribe({
        next: (data: any) => { this.authService.saveToken(data.token); console.log(data.token); this.router.navigate(['']) },
        error: error => console.log(error)
      });
  }
}
