import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosechaElementoComponent } from './cosecha-elemento.component';

describe('CosechaElementoComponent', () => {
  let component: CosechaElementoComponent;
  let fixture: ComponentFixture<CosechaElementoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosechaElementoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosechaElementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
