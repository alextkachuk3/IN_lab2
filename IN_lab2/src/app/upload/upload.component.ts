import { Component } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClient, HttpHeaders } from "@angular/common/http";

import { AuthorizationService } from "../authorization/authorization.service";

@Component({
  selector: "upload",
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './upload.component.html',
  providers: [AuthorizationService]
})
export class UploadComponent {
  selectedFile: File | null = null;
  constructor(private authService: AuthorizationService, private http: HttpClient, private router: Router) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }

  onSubmit(): void {
    if (this.selectedFile) {

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.authService.getToken()}`,
      });

      this.http.post("https://localhost:7232/Music/Upload", { 'name': 'testfilename', 'file': this.selectedFile, headers }).subscribe(
        (response) => {
          console.log('File uploaded successfully', response);
        },
        (error) => {
          console.error('Error uploading file', error);
        }
      );


      //this.http.post('https://localhost:7232/Music/Upload', formData).subscribe(
      //  (response) => {
      //    console.log('File uploaded successfully', response);
      //  },
      //  (error) => {
      //    console.error('Error uploading file', error);
      //  }
      //);
    }
  }
}
