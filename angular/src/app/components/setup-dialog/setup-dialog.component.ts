import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PreferencesComponent } from '../preferences/preferences.component';

@Component({
  selector: 'setup-dialog',
  templateUrl: './setup-dialog.component.html',
  styleUrls: ['./setup-dialog.component.css'],
})

export class SetupDialogComponent {
    display: boolean = true;
    
    GetDialogWidth(){
        return window.screen.width;
    }

    GetDialogHeight(){
        return window.screen.height;
    }
}
