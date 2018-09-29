import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary.component';
import { GraphComponent } from './components/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
