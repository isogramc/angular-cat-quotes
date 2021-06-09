import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatQuotesComponent } from './cat-quotes.component';

describe('CatQuotesComponent', () => {
  let component: CatQuotesComponent;
  let fixture: ComponentFixture<CatQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatQuotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
