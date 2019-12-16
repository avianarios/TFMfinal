import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AterrizajeDisposicionComponent } from './aterrizaje-disposicion.component';

describe('AterrizajeDisposicionComponent', () => {
  let component: AterrizajeDisposicionComponent;
  let fixture: ComponentFixture<AterrizajeDisposicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AterrizajeDisposicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AterrizajeDisposicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
