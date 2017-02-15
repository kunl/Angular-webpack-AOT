import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'detail',
    template: `
        <h2>detail {{id}} page</h2>
        <button (click)="goBack()">back</button>
    `
})
export class DetailComponent implements OnInit {
    id:number;

    constructor( public _route: ActivatedRoute, public _router: Router) {
    }

    goBack(){
        this._router.navigate(['/home'])
    }
    ngOnInit() { 
        this._route.params.map(p => p['id']).subscribe(params => {
            console.log('detial')
            this.id = params
        })
    }

}