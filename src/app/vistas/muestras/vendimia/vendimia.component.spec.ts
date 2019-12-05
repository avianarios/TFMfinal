import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendimiaComponent } from './vendimia.component';

describe('VendimiaComponent', () => {
  let component: VendimiaComponent;
  let fixture: ComponentFixture<VendimiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendimiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendimiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
