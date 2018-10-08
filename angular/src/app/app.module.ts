import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'primeng/chart';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule }   from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { SlickModule } from 'ngx-slick';

import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { GraphComponent } from './components/graph/graph.component';
import { AppContextService } from './services/app-context.service';
import { SetupDialogComponent } from './components/setup-dialog/setup-dialog.component';
import { PreferencesComponent } from './components/preferences/preferences.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    GraphComponent,
    SetupDialogComponent,
    PreferencesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChartModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    CalendarModule,
    SlickModule.forRoot()
  ],
  providers: [
    AppContextService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
