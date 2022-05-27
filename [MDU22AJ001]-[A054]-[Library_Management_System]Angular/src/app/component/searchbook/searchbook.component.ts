import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css']
})
export class SearchbookComponent implements OnInit {

  constructor(private service:BookService) { }
 books:any;
  ngOnInit(): void {
    this.books=this.service.searchedbooks(this.service.id).subscribe((data: any)=>this.books=data);
  }

}
