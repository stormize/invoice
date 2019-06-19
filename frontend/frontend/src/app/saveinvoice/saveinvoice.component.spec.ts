import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveinvoiceComponent } from './saveinvoice.component';

describe('SaveinvoiceComponent', () => {
  let component: SaveinvoiceComponent;
  let fixture: ComponentFixture<SaveinvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveinvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
