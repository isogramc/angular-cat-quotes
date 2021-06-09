import { Component, OnInit } from '@angular/core';
import { FactsService } from '../facts.service';

@Component({
  selector: 'app-cat-quotes',
  templateUrl: './cat-quotes.component.html',
  styleUrls: ['./cat-quotes.component.scss']
})
export class CatQuotesComponent implements OnInit {

  constructor(
    private factsService: FactsService
  ) {}


  catFacts = [];
  getCatFacts() {
    this.factsService.getFacts().subscribe(
      data => {
        this.catFacts = data;
      },
      err => console.error(err),
      () => console.log('get Cat facts completed')
    );
  }

  ngOnInit(): void {

  }

  ngAfterContentInit(){
    this.getCatFacts();
  }
}
