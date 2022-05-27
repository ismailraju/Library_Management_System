import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibrarianService } from 'src/app/services/librarian.service';

@Component({
  selector: 'app-librarian-details',
  templateUrl: './librarian-details.component.html',
  styleUrls: ['./librarian-details.component.css']
})
export class LibrarianDetailsComponent implements OnInit {
  librarians:any;
  constructor(private service :LibrarianService,private router:Router) { }

  ngOnInit(){
    this.librarians=this.service.getLibrarians().subscribe(data=>this.librarians=data);
  }

  update(id:any){
    this.service.id=id;
    this.router.navigateByUrl("update-librarian")
  }
  adminfeedback(){
    this.router.navigateByUrl("adminfeedback");
  }


}
