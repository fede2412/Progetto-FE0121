import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiFatturaDaIdComponent } from './aggiungi-fattura-da-id.component';

describe('AggiungiFatturaDaIdComponent', () => {
  let component: AggiungiFatturaDaIdComponent;
  let fixture: ComponentFixture<AggiungiFatturaDaIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggiungiFatturaDaIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiungiFatturaDaIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
