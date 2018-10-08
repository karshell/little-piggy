import { Component, EventEmitter, Output } from '@angular/core';
import { AppContext, AppContextService } from '../../services/app-context.service'

@Component({
  selector: 'preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css'],
})

export class PreferencesComponent {
    @Output() submitted: EventEmitter<any> = new EventEmitter();

    constructor(private appContextService: AppContextService) { }

    currencies = ['CAD', 'USD', 'EUR'];

    model = new AppContext();

    onSubmit() { 
        this.appContextService.SetContext(this.model);
        this.submitted.emit(); 
    }

    getMinTargetDate(): Date{
        var today = new Date();
        var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));   

        return tomorrow
    }
}