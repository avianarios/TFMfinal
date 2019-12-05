import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosIdealesComponent } from './parametros-ideales.component';

describe('ParametrosIdealesComponent', () => {
  let component: ParametrosIdealesComponent;
  let fixture: ComponentFixture<ParametrosIdealesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrosIdealesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrosIdealesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
