import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean';
  book:any;
  url:string="http://localhost:3000/api/";
  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
     }


}
