import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  feedbackForm=new FormGroup({
    feedback:new FormControl("",[Validators.required])
  });

  feedbackSubmit(){
      alert("Thank you for the feedback!");
      this.router.navigateByUrl("");
    }

}
