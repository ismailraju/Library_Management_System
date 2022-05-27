import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  books:any
  constructor(private service :BookService,private router:Router) { }

  ngOnInit(): void {

    this.books=this.service.getBooks().subscribe(data=>this.books=data);
  }
  update(id:any){
    this.service.id=id;
    this.router.navigateByUrl("update-books")
  }

}
