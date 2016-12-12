import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// import { ShareModule } from '../share/share.module'

import { RouterConfig } from './home.router'

import { HomeComponent } from './home.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
@NgModule({
  imports: [
    // ShareModule,
    CommonModule,
    RouterModule.forChild(RouterConfig)
  ],
  declarations: [HomeComponent, ListComponent, DetailComponent],
  exports: [HomeComponent],
  bootstrap: []
})
export class HomeModule { }
