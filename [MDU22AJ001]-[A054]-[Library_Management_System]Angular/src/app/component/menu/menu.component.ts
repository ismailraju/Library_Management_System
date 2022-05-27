import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLoggedIn:any;
  isAdmin:any;
  isLibrarian:any;
  isUser:any;

  constructor(private authService:AuthService) {
    this.authService.isLoggedIn.subscribe(value=>{
      this.isLoggedIn=value;
      console.log("isLoggedIn"+this.isLoggedIn);
    })
    
    this.authService.isAdmin.subscribe(value=>{
      this.isAdmin=value;
      console.log("isAdmin"+this.isAdmin);
   })
   this.authService.isLibrarian.subscribe(value=>{
    this.isLibrarian=value;
    console.log("isLibrarian"+this.isLibrarian);
   })
   this.authService.isUser.subscribe(value=>{
    this.isUser=value;
    console.log("isUser"+this.isUser);
   })
  }
  ngOnInit(): void {
    if(this.authService.isAuthenticated()&&this.authService.admin()){
         this.authService.isLoggedIn.next(true);
         this.authService.isAdmin.next(true);
         this.authService.isLibrarian.next(false);
         this.authService.isUser.next(false);
    }
    else if(this.authService.isAuthenticated()&&this.authService.Librarian()){
      this.authService.isLoggedIn.next(true);
      this.authService.isAdmin.next(false);
      this.authService.isLibrarian.next(true);
      this.authService.isUser.next(false);
    }
    else if(this.authService.isAuthenticated()&&this.authService.User()){
      this.authService.isLoggedIn.next(true);
      this.authService.isAdmin.next(false);
      this.authService.isLibrarian.next(false);
      this.authService.isUser.next(true);
    }
    else if(this.authService.isAuthenticated()){
      this.authService.isLoggedIn.next(true);
      
    }
  
  }

  Logout(){
    this.authService.Logout();
  }

  survey(){
    this.authService.survey();
  }


}
