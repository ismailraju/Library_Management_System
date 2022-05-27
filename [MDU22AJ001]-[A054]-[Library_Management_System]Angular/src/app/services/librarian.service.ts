import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LibrarianService {

  constructor(private http:HttpClient,private router:Router) { }
  getLibrarians(){
    return this.http.get("http://localhost:9090/librarian");
  }
  id:any;
  updateLibrarians(form:any){
    this.http.post("http://localhost:9090/updateLibrarian",form).subscribe(value=>{
    console.log(value)
    this.router.navigateByUrl("librarian-details");
    });
    }
}
