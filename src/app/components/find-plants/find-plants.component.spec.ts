import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPlantsComponent } from './find-plants.component';

describe('FindPlantsComponent', () => {
  let component: FindPlantsComponent;
  let fixture: ComponentFixture<FindPlantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPlantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
