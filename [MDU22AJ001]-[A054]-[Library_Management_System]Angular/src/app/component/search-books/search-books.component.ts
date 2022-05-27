import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {

  constructor(private book:BookService,private router:Router) { }

  ngOnInit(): void {
  
}
searchForm=new FormGroup({
  booknumber: new FormControl("")
})
SearchSubmit(){
this.book.id=this.searchForm.get("booknumber")?.value;
console.log(this.searchForm.get("booknumber")?.value);
this.book.searchedbooks(this.searchForm.get("booknumber")?.value).subscribe((value: any)=>{
  console.log(value);

});
this.router.navigateByUrl("/search");
}
}
