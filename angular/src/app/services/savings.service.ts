import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class SavingsService {
    public GetSavings(): Saving[] {
        let savings = [
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date()), 
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date()), 
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date()), 
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date()), 
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date()),
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date()), 
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date()), 
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date()), 
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date()), 
            new Saving('Biked to work', 'Transportation', 2.00, new Date()),
            new Saving('Didn\'t buy coffee', 'Food', 1.75, new Date()),
            new Saving('Expensed Dinner', 'Food', 26.45, new Date())
        ];

        return savings;
    }
}

export class Saving {
    constructor(
        public Name: string,
        public Category: string,
        public Amount: number,
        public Date: Date
    ) { }
}