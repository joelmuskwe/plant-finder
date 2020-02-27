import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand">
      Plant Finder
      <div class="nav navbar-nav">
        <a
          class="nav-item nav-link"
          [routerLink]="['/']"
          routerLinkActive="active"
          >Home</a
        >
        <a
          class="nav-item nav-link"
          [routerLink]="['/find']"
          routerLinkActive="active"
          >Filter</a
        >
        <a
          class="nav-item nav-link"
          [routerLink]="['/add']"
          routerLinkActive="active"
          >Add</a
        >
      </div>
    </nav>
    <toaster-container></toaster-container>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'san-franscisco-plant-finder-project';
}
