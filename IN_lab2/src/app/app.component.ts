import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgFor } from "@angular/common";
import { RouterOutlet, RouterLink } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Jwt } from './authorization/jwt'

class Item {
  purchase: string;
  done: boolean;
  price: number;

  constructor(purchase: string, price: number) {

    this.purchase = purchase;
    this.price = price;
    this.done = false;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgFor, RouterOutlet, RouterLink, NgbModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IN_lab2';
  
}
