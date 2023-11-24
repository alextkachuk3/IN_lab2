import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { AuthorizationService } from "./authorization/authorization.service";
import { NgFor } from "@angular/common";
import { Music } from "./music";

@Component({
  selector: "main",
  imports: [NgFor],
  standalone: true,
  templateUrl: "./main.component.html",
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  public musics: Music[] = [];
  constructor(private http: HttpClient, private authService: AuthorizationService) { }

  ngOnInit() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`,
    });
    
    this.http.get<Music[]>('https://localhost:7232/Music', { headers }).subscribe(
      (data) => {
        data.forEach((element:any) => this.musics.push(element));
        console.log(this.musics);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
