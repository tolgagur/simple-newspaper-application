import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-sportnew',
  templateUrl: './sportnew.component.html',
  styleUrls: ['./sportnew.component.css']
})
export class SportnewComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  sportsnewsDisplay: any = [];
  ngOnInit(): void {
    this._services.sportNew().subscribe((result)=>{
      console.log(result);
      this.sportsnewsDisplay = result.articles;
    })
  }

}
