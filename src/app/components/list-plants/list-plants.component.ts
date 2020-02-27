import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlantEntity } from 'src/app/entities';

@Component({
  selector: 'app-list-plants',
  templateUrl: './list-plants.component.html',
  styleUrls: ['./list-plants.component.scss']
})
export class ListPlantsComponent {
  @Input() plants: PlantEntity[];
  @Output() changePage = new EventEmitter<number>();

  currentPage = 1;

  constructor() {}

  pageChanged(event: any): void {
    this.changePage.emit(event.page);
  }
}
