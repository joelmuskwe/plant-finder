import { TestBed } from '@angular/core/testing';

import { PlantFinderService } from './plant-finder.service';

describe('PlantFinderService', () => {
  let service: PlantFinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantFinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
