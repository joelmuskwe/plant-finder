import { Component } from '@angular/core';
import { PlantForm } from 'src/app/entities';
import { PlantFinderService } from '../../services';

@Component({
  selector: 'app-add-plant-core',
  templateUrl: './add-plant-core.component.html',
  styleUrls: ['./add-plant-core.component.scss']
})
export class AddPlantCoreComponent {
  constructor(private plantFinderService: PlantFinderService) {}

  onAdd(plant: PlantForm): void {
    this.plantFinderService.add(plant);
  }
}
