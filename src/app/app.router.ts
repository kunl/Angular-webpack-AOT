import { Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { contactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';


import { ListComponent } from './components/home/list/list.component';
import { DetailComponent } from './components/home/detail/detail.component';


export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: '', component: ListComponent },
            { path: 'detail', component: DetailComponent }
        ]
    },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: contactComponent },

    {
        path:'news', loadChildren: './components/news/news.module#NewsModule'
    }
];