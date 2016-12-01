import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    template: `
        <h2>home page</h2>
        <router-outlet></router-outlet>
    `
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}