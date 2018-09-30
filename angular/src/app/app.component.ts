import { Component, OnInit } from '@angular/core';
import { AppContextService, AppContext } from './services/app-context.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  constructor(private contextService: AppContextService) { }

  IsInitialized(): boolean {
    return this.contextService.GetContext().IsInitialized();
  }
}
