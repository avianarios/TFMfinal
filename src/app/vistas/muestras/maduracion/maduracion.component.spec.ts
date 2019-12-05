import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaduracionComponent } from './maduracion.component';

describe('MaduracionComponent', () => {
  let component: MaduracionComponent;
  let fixture: ComponentFixture<MaduracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaduracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaduracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
