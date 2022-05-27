import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-libraian-login',
  templateUrl: './libraian-login.component.html',
  styleUrls: ['./libraian-login.component.css']
})
export class LibraianLoginComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
   
  }
  
 
  librarianform=new FormGroup({
  role:new FormControl("librarian"),
  userId:new FormControl(""),
  password: new FormControl(""),
})
librarianLogin(event:any){
    this.auth.verify(this.librarianform.get("role")?.value,this.librarianform.get("userId")?.value,this.librarianform.get("password")?.value )

    console.log(this.librarianform.value);
}
}
