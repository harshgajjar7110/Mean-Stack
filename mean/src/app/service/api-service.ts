import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  url: string = "http://localhost:3000/api/";

  constructor(private http: HttpClient) {}

  getData(): any {
    return this.http.get(this.url + "getBook");
  }
  deleteBook(id): any {
    return this.http.delete(this.url + "deleteBook/" + id);
  }
  updateBook(data): any {
    return this.http.put(this.url + "updateBook", data);
  }
}
