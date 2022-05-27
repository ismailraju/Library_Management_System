import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) {}

  getBooks(){
    return this.http.get("http://localhost:9090/book");
  }
  id:any;
  updateBooks(form:any){
    this.http.post("http://localhost:9090/updateBook",form).subscribe(value=>{
    console.log(value)
    });
    }
    searchedbooks(b_number:any){
      return this.http.get("http://localhost:9090/searchedbooks/"+b_number)
    

    }
}
