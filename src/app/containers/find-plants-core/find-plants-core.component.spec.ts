import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPlantsCoreComponent } from './find-plants-core.component';

describe('FindPlantsCoreComponent', () => {
  let component: FindPlantsCoreComponent;
  let fixture: ComponentFixture<FindPlantsCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPlantsCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPlantsCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
