import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PreferencesComponent } from './preferences.component';

@Component({
  selector: 'setup-dialog',
  templateUrl: './setup-dialog.component.html',
  styleUrls: ['./setup-dialog.component.css'],
})

export class SetupDialogComponent {
    display: boolean = true;
    
    GetDialogWidth(){
        return window.screen.width - 10;
    }

    GetDialogHeight(){
        return window.screen.height - 10;
    }
}
