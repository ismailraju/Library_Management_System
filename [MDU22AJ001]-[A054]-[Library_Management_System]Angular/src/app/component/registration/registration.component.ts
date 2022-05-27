import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private http:HttpClient,private authService:AuthService) { }

  ngOnInit(): void {
  }
registerForm=new FormGroup({
  firstname: new FormControl("",[Validators.required]),
  lastname: new FormControl("",[Validators.required]),
  dob: new FormControl("",[Validators.required]),
  gender: new FormControl("",[Validators.required]),
  email: new FormControl("",[Validators.required]),
  contactno: new FormControl("",[Validators.required]),
  userid:new FormControl("",[Validators.required]),
  password: new FormControl("",[Validators.required]),
 
})
RegisterSubmit(event:any){
  
  event.preventDefault();
console.log(this.registerForm.value);
  // if (this.registerForm.invalid) return;



  console.log(this.registerForm.value);

  this.authService.register({...this.registerForm.value}).subscribe({

    next: (value) => {

      console.log(value);

    },



    error: (error) => {

      console.log(error);

    },



    complete: () => {
      alert("Regitration Sucessfull")
      console.log('completed');

    },

  });
  
}
getErrors(control: any){
  return control.invalid && control.touched;
}

}


