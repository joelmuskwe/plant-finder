import { Component, OnInit } from '@angular/core';
import { PlantFinderService } from 'src/app/services';
import { Observable } from 'rxjs';
import { PlantEntity } from 'src/app/entities';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-plants-core',
  templateUrl: './list-plants-core.component.html',
  styleUrls: ['./list-plants-core.component.scss']
})
export class ListPlantsCoreComponent {
  plants$: Observable<PlantEntity[]> = this.plantFinderService.plants$;
  offset = 0;

  constructor(private plantFinderService: PlantFinderService) {
    this.onChangePage(1);
  }

  onChangePage(page): void {
    this.offset = (page - 1) * 15;
    this.plantFinderService.getAll(15, this.offset);
  }
}
