import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaFatturaComponent } from './elimina-fattura.component';

describe('EliminaFatturaComponent', () => {
  let component: EliminaFatturaComponent;
  let fixture: ComponentFixture<EliminaFatturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminaFatturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminaFatturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
