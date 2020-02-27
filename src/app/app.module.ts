import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToasterModule } from 'angular2-toaster';

import { PaginationModule, ModalModule } from 'ngx-bootstrap';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ListPlantsCoreComponent,
  FindPlantsCoreComponent,
  AddPlantCoreComponent
} from './containers';
import {
  ListPlantsComponent,
  AddPlantComponent,
  FindPlantsComponent
} from './components';
import { ViewPlantModalComponent } from './components/view-plant-modal/view-plant-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPlantsCoreComponent,
    FindPlantsCoreComponent,
    AddPlantCoreComponent,
    ListPlantsComponent,
    AddPlantComponent,
    FindPlantsComponent,
    ViewPlantModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ModalModule.forRoot(),
    NgBootstrapFormValidationModule.forRoot(),
    PaginationModule.forRoot(),
    ReactiveFormsModule,
    ToasterModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
