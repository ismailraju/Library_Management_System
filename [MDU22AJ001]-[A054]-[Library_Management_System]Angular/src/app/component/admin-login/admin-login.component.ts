import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private auth:AuthService ) { }

  ngOnInit(): void {
  }


adminForm=new FormGroup({
  role:new FormControl("admin"),
  userid:new FormControl(""),
  password: new FormControl(""),
})
adminSubmit(event:any){
    this.auth.verify(this.adminForm.get("role")?.value,this.adminForm.get("userid")?.value,this.adminForm.get("password")?.value )
}

}
