import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgFor, NgIf, NgOptimizedImage } from "@angular/common";
import { RouterOutlet, RouterLink } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";

import { AuthorizationService } from './authorization/authorization.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, NgOptimizedImage, RouterOutlet, RouterLink, NgbModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthorizationService]
})
export class AppComponent {
  public username: string = '';
  constructor(public authService: AuthorizationService) {
    if (this.authService.getToken()) {
      this.authService.getUsername()
        .subscribe({
          next: (data: any) => { this.username = data.username; console.log(data) },
          error: error => console.log(error)
        });
    }
  }

  title = 'IN_lab2';

  logout(): void {
    this.authService.logout();
  }

}
