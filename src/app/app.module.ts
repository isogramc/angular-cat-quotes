import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CatQuotesComponent } from './cat-quotes/cat-quotes.component';
import { FactsPipe } from './facts.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CatQuotesComponent,
    FactsPipe
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
