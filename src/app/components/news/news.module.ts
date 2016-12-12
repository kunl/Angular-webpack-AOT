import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { ShareModule } from '../share/share.module'

import { NewsComponent } from './news.component';

@NgModule({
  imports: [
    // CommonModule,
    ShareModule,
    RouterModule.forChild([
      {
        path: '', component: NewsComponent
      }
    ])
  ],
  declarations: [ NewsComponent ]
})
export class NewsModule { }
