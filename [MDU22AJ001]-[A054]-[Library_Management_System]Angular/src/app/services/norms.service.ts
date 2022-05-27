import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NormsService {

  constructor(private http:HttpClient) { }
  getNorms(){
    return this.http.get("http://localhost:9090/librarian");
  }
}
