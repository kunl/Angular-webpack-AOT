import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { contactComponent } from './components/contact/contact.component';
import { rootRouterConfig } from './app.router'
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
  ],
  declarations: [AppComponent, AboutComponent, contactComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
