import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlantForm } from '../../entities';

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.scss']
})
export class AddPlantComponent {
  @Output() add = new EventEmitter<PlantForm>();
  addPlantForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.addPlantForm = fb.group({
      common_name: ['', [Validators.required, Validators.maxLength(25)]],
      plant_type: ['', Validators.required],
      bloom_time: ['', Validators.required],
      flower_color: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(15)]
      ],
      soil_type: [''],
      habitat_value: ['']
    });
  }

  submit(): void {
    this.add.emit(this.addPlantForm.value);
  }
}
