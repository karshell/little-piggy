import { Component } from '@angular/core';

@Component({
  selector: 'graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})

export class GraphComponent {
  data: any;
  options: any;

  constructor() {
      this.data = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
              {
                  label: 'Money Saved',
                  data: [0, 48, 67, 76, 86, 123, 145],
                  fill: false,
                  borderColor: '#565656'
              }
          ]
      };

      this.options = {
        title: {
          display: true,
          text: 'Money Saved',
          fontSize: 16
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
              ticks: {
                  // Include a dollar sign in the ticks
                  callback: function(value, index, values) {
                      return '$' + value;
                  }
              }
          }]
        },
        layout: {
          padding: {
              left: 0,
              right: 0,
              top: 10,
              bottom: 0
          }
      }
      };
  }
}
