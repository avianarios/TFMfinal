import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaCosechaComponent } from './nueva-cosecha.component';

describe('NuevaCosechaComponent', () => {
  let component: NuevaCosechaComponent;
  let fixture: ComponentFixture<NuevaCosechaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaCosechaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaCosechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
