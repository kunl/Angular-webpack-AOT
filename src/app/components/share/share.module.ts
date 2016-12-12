import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent }   from './search.component';

@NgModule({
    imports: [CommonModule, CommonModule],
    exports: [SearchComponent, CommonModule],
    declarations: [SearchComponent],
    providers: []
})
export class ShareModule { 
    static forRoot() {
        return {
            ngModule: ShareModule,
            providers: []
        }
    }
}
