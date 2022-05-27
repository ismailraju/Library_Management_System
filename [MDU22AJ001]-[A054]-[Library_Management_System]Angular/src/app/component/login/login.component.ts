import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }


 loginForm=new FormGroup({
  role:new FormControl("user"),
  userid:new FormControl(""),
  password: new FormControl(""),
})
loginSubmit(event:any){
    this.auth.verify(this.loginForm.get("role")?.value,this.loginForm.get("userid")?.value,this.loginForm.get("password")?.value )
}


}