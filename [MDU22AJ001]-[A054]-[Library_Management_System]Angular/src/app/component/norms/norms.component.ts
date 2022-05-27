import { Component, OnInit } from '@angular/core';
import { NormsService } from 'src/app/services/norms.service';

@Component({
  selector: 'app-norms',
  templateUrl: './norms.component.html',
  styleUrls: ['./norms.component.css']
})
export class NormsComponent implements OnInit {

  norms:any;
  constructor(private service :NormsService) { }

  ngOnInit(): void {
    this.norms=this.service.getNorms().subscribe(data=>this.norms=data);
  }

}
