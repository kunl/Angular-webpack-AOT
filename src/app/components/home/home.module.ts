import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// import { rootRouterConfig } from './home.router'

import { HomeComponent }  from './home.component';
import { ListComponent }  from './list/list.component';
import { DetailComponent }  from './detail/detail.component';
@NgModule({
  imports: [ BrowserModule,
            RouterModule
//    RouterModule.forChild(rootRouterConfig) 
   ],
  declarations: [ HomeComponent, ListComponent, DetailComponent ],
  exports: [ HomeComponent ],
  bootstrap:    [  ]
})
export class HomeModule { }
