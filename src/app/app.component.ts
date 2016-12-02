import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'my-app',
    styles: [
        `
        a{
            text-decoration: none;
            margin-right: 20px;
            padding: 5px 10px;
            border-bottom: 1px solid transparent;
        }

        a.active {
            border-color: pink
        }

        .content {
            box-sizing: border-box;
            margin: 20px auto;
            width: 70vw;
            padding: 30px
        }
        `
    ],
    template: `
 

    <div class="content">
        <h1>Hello {{name}}</h1>

        <a [routerLink]="['/about']" routerLinkActive="active">
        About
        </a>
        
        <a [routerLink]="['/contact']" routerLinkActive="active">
        contact
        </a>

        <a [routerLink]="['/home']" routerLinkActive="active">
        home
        </a>

        <a [routerLink]="['/news']" routerLinkActive="active">
        news
        </a>
        <router-outlet name="sidebar"></router-outlet>
      
        <router-outlet></router-outlet>
    </div>
    
  `,
})
export class AppComponent {
    name = 'Angular';
    constructor( @Inject(ActivatedRoute) public _route: ActivatedRoute) {
        console.log(this._route)
    }

}
