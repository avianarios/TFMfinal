import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfparametrosComponent } from './confparametros.component';

describe('ConfparametrosComponent', () => {
  let component: ConfparametrosComponent;
  let fixture: ComponentFixture<ConfparametrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfparametrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfparametrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
