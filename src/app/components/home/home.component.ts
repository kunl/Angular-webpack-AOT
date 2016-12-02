import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'home',
    styles: [
        `
        home {
            overflow: hidden;
        }
        .list {
            width: 30%;
            margin-right: 20px;
            border-right: 1px solid #ccc;
        }
        .list, .detail {
            display: inline-block;
            vertical-align: top
        }
        
        `
    ],
    template: `
        <h2>home page</h2>
        <div class="list">
            <router-outlet></router-outlet>
        </div>
        <div class="detail">
            <router-outlet name="right"></router-outlet>
        </div>
    `
})
export class HomeComponent implements OnInit {
    

    ngOnInit() { }

}