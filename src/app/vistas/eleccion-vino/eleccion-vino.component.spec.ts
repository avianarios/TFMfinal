import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EleccionVinoComponent } from './eleccion-vino.component';

describe('EleccionVinoComponent', () => {
  let component: EleccionVinoComponent;
  let fixture: ComponentFixture<EleccionVinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleccionVinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleccionVinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
