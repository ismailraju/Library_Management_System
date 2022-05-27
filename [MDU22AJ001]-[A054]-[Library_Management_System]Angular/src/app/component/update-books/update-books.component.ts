import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.css']
})
export class UpdateBooksComponent implements OnInit {

  constructor(private service:BookService) { }

  ngOnInit(): void {
    console.log(this.service.id);


  }
  id=new FormControl(this.service.id);
  updatebookForm=new FormGroup({
    booknumber:this.id,
    bookname: new FormControl(""),
    author: new FormControl(""),
    subject: new FormControl("")

  
    
  })
UpdateSubmit(event:any){
  console.log(this.updatebookForm.value)
  alert("book updated successfully");
  this.service.updateBooks(this.updatebookForm.value);
}

}
