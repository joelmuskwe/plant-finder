import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { PlantEntity, PlantFilterEntity, PlantForm } from '../entities';
import { ToasterService } from 'angular2-toaster';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlantFinderService {
  constructor(
    private http: HttpClient,
    private toasterService: ToasterService,
    private router: Router
  ) {}

  private plants: PlantEntity[] = [];

  dataSource$ = new BehaviorSubject<PlantEntity[]>(this.plants);
  plants$ = this.dataSource$.asObservable();

  getAll(limit: number, offset: number) {
    this.http
      .get<PlantEntity[]>(
        `https://data.sfgov.org/resource/vmnk-skih.json?$limit=${limit}&$offset=${offset}`
      )
      .subscribe(plants => {
        this.plants = plants;
        this.dataSource$.next(this.plants);
      });
  }

  filterPlants(query: PlantFilterEntity) {
    let queryParams = `bloom_time=${query.bloom_time}`;
    if (!!query.plant_type) {
      queryParams += `&plant_type=${query.plant_type}`;
    }
    if (!!query.appropriate_location) {
      queryParams += `&appropriate_location=${query.appropriate_location}`;
    }
    if (!!query.habitat_value) {
      queryParams += `&habitat_value=${query.habitat_value}`;
    }
    return this.http
      .get<PlantEntity[]>(
        `https://data.sfgov.org/resource/vmnk-skih.json?${queryParams}`
      )
      .subscribe(plants => {
        this.plants = plants;
        this.dataSource$.next(this.plants);
      });
  }

  add(plant: PlantForm) {
    this.plants.push(plant);
    this.dataSource$.next(this.plants);
    this.toasterService.pop('success', 'Add Plant', 'Successfully added plant');
    this.router.navigate(['/']);
  }
}
