import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlantCoreComponent } from './add-plant-core.component';

describe('AddPlantCoreComponent', () => {
  let component: AddPlantCoreComponent;
  let fixture: ComponentFixture<AddPlantCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlantCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlantCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
