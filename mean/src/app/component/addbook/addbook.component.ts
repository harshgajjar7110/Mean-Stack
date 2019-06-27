import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-addbook",
  templateUrl: "./addbook.component.html",
  styleUrls: ["./addbook.component.css"]
})
export class AddbookComponent implements OnInit {
  author: string;
  name: string;
  title: string;
  url: string = "http://localhost:3000/api/";

  constructor(private http: HttpClient) {}

  ngOnInit() {}
  addbook(item) {
    console.log(item.value);
    this.http.post(this.url + "addBook", item.value).subscribe(res => {
      console.log(res);
    });
  }
  updateBook(item) {
    this.http.put(this.url + "updateBook", item).subscribe(res => {
      console.log(res);
    });
  }
}
