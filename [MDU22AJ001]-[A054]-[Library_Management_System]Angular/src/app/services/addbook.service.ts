import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AddbookService {

  constructor(private http:HttpClient, private router:Router) { }

  addbook(body: any) {

    return this.http.post("http://localhost:9090/book", body)
  
}
}
