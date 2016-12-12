import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'about',
    template: `
        <h2>about page</h2>
        <search *ngIf="true"></search>
        <p *ngIf="true">about page</p>
    `
})
export class AboutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}