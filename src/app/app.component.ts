import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>

    <a [routerLink]="['/about']">
      About
    </a>
    
    <a [routerLink]="['/contact']">
      contact
    </a>

    <a [routerLink]="['/home']">
      home
    </a>

    <a [routerLink]="['/news']">
      news
    </a>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent  { name = 'Angular'; }
