import { Component, OnInit } from '@angular/core';
import { SavingsService, Saving } from '../../services/savings.service'

@Component({
    selector: 'savings-list',
    templateUrl: './savings-list.component.html',
    styleUrls: ['./savings-list.component.css']
})
export class SavingsListComponent implements OnInit {
    private savings: Saving[];
    private displayedItems: Saving[] = [];
    private initialLoad: number = 15;
    throttle = 200;
    scrollDistance = 2;

    constructor(private savingsService: SavingsService){ }

    ngOnInit(){
        this.savings = this.savingsService.GetSavings();

        this.appendItems(0, this.initialLoad);
    }

    appendItems(startIndex, endIndex) {
        for (let i = startIndex; i < endIndex || i < this.savings.length; ++i) {
          this.displayedItems.push(this.savings[i]);
        }
    }

    //infinite scroll attempt not working
    onScrollDown() {
        console.log('scrolled down!!');

        // add another 20 items
        const start = this.displayedItems.length;

        this.appendItems(start, start + 15);
    }
}