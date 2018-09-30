import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class AppContextService {
    private appContext: AppContext;
    
    constructor() { 
        this.appContext = new AppContext();
    }

    GetContext(): AppContext {
        return this.appContext;
    }

    SetContext(appContext: AppContext) {
        this.appContext = appContext;
    }
}

export class AppContext {
    constructor(
        public SavingsTarget: number = null,
        public TargetDate: Date = null,
        public Currency: string = null
    ) { }
    
    public IsInitialized(): boolean {
        return this.Currency !=null && this.SavingsTarget != null && this.TargetDate != null
    }
}