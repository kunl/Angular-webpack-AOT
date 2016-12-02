import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'list',
    styles: [
        `
        a{
            padding: 0 10px;
        }
        a.active{
            color: #fff;
            background: pink
        }
        `
    ],
    template: `
        <ul>
            <li *ngFor="let num of list">
                <a  [routerLink]="['/home','detail', num]" routerLinkActive="active">
                    {{num}}
                </a>
            </li>
        </ul>       
    `
})
export class ListComponent implements OnInit {

    public list: number[] = [
        1, 2, 3, 4, 5, 6, 7
    ]
    constructor() { }

    ngOnInit() { }

}