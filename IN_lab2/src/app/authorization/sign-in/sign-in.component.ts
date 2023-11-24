import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "sign-in",
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sign-in.component.html',
})
export class SignInComponent { }
