import { Component } from '@angular/core';
import { PlantFinderService } from '../../services';
import { PlantFilterEntity, PlantEntity } from 'src/app/entities';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-find-plants-core',
  templateUrl: './find-plants-core.component.html',
  styleUrls: ['./find-plants-core.component.scss']
})
export class FindPlantsCoreComponent {
  plants$: Observable<PlantEntity[]> = this.plantFinderService.plants$;

  currentPage = 1;

  constructor(private plantFinderService: PlantFinderService) {}

  onFilter(query: PlantFilterEntity): void {
    this.plantFinderService.filterPlants(query);
  }
}
