import { Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { contactComponent } from './components/contact/contact.component';
import { HomeModule } from './components/home/home.module';


import { ListComponent } from './components/home/list/list.component';
import { DetailComponent } from './components/home/detail/detail.component';


export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './components/home/home.module#HomeModule' },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: contactComponent },
    { path: 'sidebar', component: contactComponent, outlet: 'sidebar' },

    { path: 'news', loadChildren: './components/news/news.module#NewsModule' }
];