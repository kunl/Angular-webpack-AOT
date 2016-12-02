import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RouterConfig } from './home.router'

import { HomeComponent }  from './home.component';
import { ListComponent }  from './list/list.component';
import { DetailComponent }  from './detail/detail.component';
@NgModule({
  imports: [ CommonModule,
            // RouterModule
   RouterModule.forChild(RouterConfig) 
   ],
  declarations: [ HomeComponent, ListComponent, DetailComponent ],
  exports: [ HomeComponent ],
  bootstrap:    [  ]
})
export class HomeModule { }
