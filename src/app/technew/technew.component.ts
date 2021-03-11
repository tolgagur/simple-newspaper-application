import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-technew',
  templateUrl: './technew.component.html',
  styleUrls: ['./technew.component.css']
})
export class TechnewComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  technewDisplay:any = [];

  ngOnInit(): void {
    this._services.techNew().subscribe((result)=>{
      console.log(result);
      this.technewDisplay = result.articles;
    })

  }

}
