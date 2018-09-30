import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'primeng/chart';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule }   from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary.component';
import { GraphComponent } from './components/graph.component';
import { AppContextService } from './services/app-context.service';
import { SetupDialogComponent } from './components/setup-dialog.component';
import { PreferencesComponent } from './components/preferences.component';

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
    CalendarModule
  ],
  providers: [
    AppContextService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
