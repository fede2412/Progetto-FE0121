import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteFattureComponent } from './cliente-fatture.component';

describe('ClienteFattureComponent', () => {
  let component: ClienteFattureComponent;
  let fixture: ComponentFixture<ClienteFattureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteFattureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteFattureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
