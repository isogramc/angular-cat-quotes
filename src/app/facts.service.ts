import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FactsService {
  list: any;
  constructor(
    private http: HttpClient
  ) {}

  getFacts():Observable<any> {
    return this.http.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=8');
  }

}
