import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'detail',
    template: `
        <h2>detail {{id}} page</h2>
        <button (click)="goBack()">back</button>
    `
})
export class DetailComponent implements OnInit {
    id:number;

    constructor( @Inject(ActivatedRoute) public _route: ActivatedRoute, @Inject(Router) public _router: Router) {
    }

    goBack(){
        this._router.navigate(['/home', 'list'])
    }
    ngOnInit() { 
        this._route.params.map(p => p['id']).subscribe(params => {
            this.id = params
        })
    }

}