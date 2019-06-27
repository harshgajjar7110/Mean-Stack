import { Component, OnInit } from "@angular/core";
import { ApiService } from "./../../service/api-service";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.css"]
})
export class ResultComponent implements OnInit {
  book: any;
  url: string = "http://localhost:3000/api/";
  author: String;
  title: string;
  name: string;
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.getData();
  }
  edit(item) {
    this.author = item.author;
    this.name = item.name;
    this.title = item.title;
  }
  private getData() {
    this.api.getData().subscribe(res => {
      console.log(res);
      this.book = res;
    });
  }
  deleteBook(id) {
    this.api.deleteBook(id).subscribe(res => {
      console.log(res);
      this.book = res;
    });
  }
  updateBook(id) {
    console.log(this.author, this.name, this.title, id);
    let book = {
      author: this.author,
      name: this.name,
      title: this.title,
      id: id
    };
    this.api.updateBook(book).subscribe(res => {
      console.log(res);
      this.book = res;
    });
  }
}
