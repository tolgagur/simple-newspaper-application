import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  apiUrl= "https://newsapi.org/v2/top-headlines?country=tr&apiKey=08c916084c5f4987a7706a1062515e3b";

  techUrl= "https://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=08c916084c5f4987a7706a1062515e3b";

  sportUrl= "https://newsapi.org/v2/top-headlines?country=tr&category=sports&apiKey=08c916084c5f4987a7706a1062515e3b";

   



  topHeading():Observable<any>
  {
    return this._http.get(this.apiUrl);
  }

  techNew():Observable<any>
  {
    return this._http.get(this.techUrl);
  }

  sportNew():Observable<any>
  {
    return this._http.get(this.sportUrl);
  }
}
