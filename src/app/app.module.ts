import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {VisitModule} from './visit/visit.module';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';

@NgModule({
declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    VisitModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
