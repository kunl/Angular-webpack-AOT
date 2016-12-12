import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ShareModule } from '../share/share.module'

import { AboutComponent } from './about.component';

@NgModule({
    imports: [
        ShareModule,
        RouterModule.forChild([
            {
                path: '', component: AboutComponent
            }
        ])
    ],
    exports: [],
    declarations: [AboutComponent],
    providers: [],
})
export class AboutModule { }
