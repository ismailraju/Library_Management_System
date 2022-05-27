import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
isLoggedIn = new BehaviorSubject<any>(null);
isAdmin = new BehaviorSubject<any>(null);
isLibrarian = new BehaviorSubject<any>(null);
isUser = new BehaviorSubject<any>(null);
isAuthenticated(): boolean {
  var loggedIn = localStorage.getItem("username");
  if (loggedIn == "" || loggedIn == null) {
    return false;
  }
  else {
    return true;
  }
}
admin():boolean{
  var rolea=localStorage.getItem("rolea");
  if(rolea=="admin"){
    return true;
  }
  return false;
}
Librarian():boolean{
  var rolea=localStorage.getItem("rolea");
  if(rolea=="librarian"){
    return true;
  }
  return false;
}
User():boolean{
  var rolea=localStorage.getItem("rolea");
  if(rolea=="user"){
    return true;
  }
  return false;
}
url:string="http://localhost:9090/login";
  constructor(private http:HttpClient, private router:Router) { }
  register(body: any) {
    return this.http.post("http://localhost:9090/User", body)
 
}
verify(rolea:string, user: number, pass: string) {
  
  let post = {role:rolea, userId: user, password: pass }
  this.http.post(this.url, post).subscribe({
    next: (value) => {
      if (value == true) {
          console.log("Success");
          this.isLoggedIn.next(true);
        if(rolea=="admin"){
         this.router.navigateByUrl("librarian-details");
          this.isAdmin.next(true);
          this.isLibrarian.next(false);
          this.isUser.next(false);
        }
          else if(rolea=="librarian"){
          this.router.navigateByUrl("librarian-details");
          this.isAdmin.next(false);
          this.isLibrarian.next(true);
          this.isUser.next(false);
        }
        else if(rolea=="user"){
          this.router.navigateByUrl("/userpage")
          this.isAdmin.next(false);
          this.isLibrarian.next(false);
          this.isUser.next(true);
        }
      }
      else if (value == false) {
        alert("Admin Password is wrong");
      }
    },


    error: (error) => {
      alert("UserId is wrong");
    },


    complete: () => {
     
      console.log('completed');
    },
  })
}
Logout(){
  localStorage.clear();
  this.router.navigateByUrl("");
  this.isLoggedIn.next(false);
  this.isAdmin.next(false);
  this.isLibrarian.next(false);
  this.isUser.next(false);
}
survey(){
  this.router.navigateByUrl('survey');
}
}