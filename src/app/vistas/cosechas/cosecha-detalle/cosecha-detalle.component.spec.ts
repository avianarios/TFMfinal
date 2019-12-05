import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosechaDetalleComponent } from './cosecha-detalle.component';

describe('CosechaDetalleComponent', () => {
  let component: CosechaDetalleComponent;
  let fixture: ComponentFixture<CosechaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosechaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosechaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
