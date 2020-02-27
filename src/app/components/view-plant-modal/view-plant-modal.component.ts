import { Component, OnInit, Input } from '@angular/core';
import { PlantEntity } from 'src/app/entities';

@Component({
  selector: 'app-view-plant-modal',
  templateUrl: './view-plant-modal.component.html',
  styleUrls: ['./view-plant-modal.component.scss']
})
export class ViewPlantModalComponent implements OnInit {
  @Input() plant: PlantEntity;

  constructor() {}

  ngOnInit(): void {}
}
