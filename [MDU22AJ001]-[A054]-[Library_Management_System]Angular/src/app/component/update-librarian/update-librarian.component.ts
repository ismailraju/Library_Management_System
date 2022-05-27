import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LibrarianService } from 'src/app/services/librarian.service';

@Component({
  selector: 'app-update-librarian',
  templateUrl: './update-librarian.component.html',
  styleUrls: ['./update-librarian.component.css']
})
export class UpdateLibrarianComponent implements OnInit {

  constructor(private service:LibrarianService) { }

  ngOnInit(): void {
    console.log(this.service.id);
  }
  id=new FormControl(this.service.id);
  updatelibForm=new FormGroup({
    username:this.id,
    firstname: new FormControl(""),
    lastname: new FormControl(""),
    email: new FormControl("")

  
    
  })
UpdatelibSubmit(event:any){
  console.log(this.updatelibForm.value)

  this.service.updateLibrarians(this.updatelibForm.value);
}


}
