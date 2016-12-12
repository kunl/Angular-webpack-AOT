import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';

import { contactComponent } from './components/contact/contact.component';
import { rootRouterConfig } from './app.router'
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
  ],
  declarations: [AppComponent, contactComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
