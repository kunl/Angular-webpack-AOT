import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'news',
    template: `
        <h2>news page</h2>
        <search *ngIf="true"></search>
    `
})
export class NewsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}