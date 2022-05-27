import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminfeedback',
  templateUrl: './adminfeedback.component.html',
  styleUrls: ['./adminfeedback.component.css']
})
export class AdminfeedbackComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  adminfeedbackSubmit(){
    alert("Thanks for feedback");
    this.router.navigateByUrl("");
   
}
}
