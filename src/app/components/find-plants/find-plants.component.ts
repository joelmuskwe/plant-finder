import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlantFilterEntity } from 'src/app/entities';

@Component({
  selector: 'app-find-plants',
  templateUrl: './find-plants.component.html',
  styleUrls: ['./find-plants.component.scss']
})
export class FindPlantsComponent {
  @Output() filter = new EventEmitter<PlantFilterEntity>();

  filterPlantsForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.filterPlantsForm = fb.group({
      bloom_time: ['Summer', Validators.required],
      plant_type: [''],
      appropriate_location: [''],
      habitat_value: ['']
    });
  }

  submit(): void {
    this.filter.emit(this.filterPlantsForm.value);
  }
}
