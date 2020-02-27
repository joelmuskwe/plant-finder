import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlantsCoreComponent } from './list-plants-core.component';

describe('ListPlantsCoreComponent', () => {
  let component: ListPlantsCoreComponent;
  let fixture: ComponentFixture<ListPlantsCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPlantsCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlantsCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
