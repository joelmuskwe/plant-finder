import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlantModalComponent } from './view-plant-modal.component';

describe('ViewPlantModalComponent', () => {
  let component: ViewPlantModalComponent;
  let fixture: ComponentFixture<ViewPlantModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPlantModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPlantModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
