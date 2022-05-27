import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddbookService } from 'src/app/services/addbook.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  constructor(private http:HttpClient,private addbookService:AddbookService) { }

  ngOnInit(): void {
  }


addbookForm=new FormGroup({
  booknumber: new FormControl(""),
  bookname: new FormControl(""),
  author: new FormControl(""),
  subject: new FormControl(""),

})
addbookSubmit(event:any){
  
  event.preventDefault();
console.log(this.addbookForm.value);
  // if (this.registerForm.invalid) return;



  console.log(this.addbookForm.value);

  this.addbookService.addbook({...this.addbookForm.value}).subscribe({

    next: (value) => {

      console.log(value);

    },



    error: (error) => {

      console.log(error);

    },



    complete: () => {

      console.log('completed');
alert("book added successfully");
    },

  });
  
}
getErrors(control: any){
  return control.invalid && control.touched;
}

}




