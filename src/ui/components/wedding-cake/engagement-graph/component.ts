import Component, { tracked } from '@glimmer/component';

import { milestones, totalEngaged } from '../../../../utils/settings';


export default class EngagementGraph extends Component {
    @tracked weightedMilestones: object[] = [];
    @tracked weightedEngagementNumber: object = {
      weighted: 0,
      textPosition: 0,
    };

    didInsertElement() {
        this.updateWeightedEngagementNumber();
        this.updateWeightedMilestones();
        var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        })
    }

    didUpdate() {
        this.updateWeightedEngagementNumber();
    }

    calculateWeighted(n: number) {
        return Math.round((n / totalEngaged) * 100);
    }

    updateWeightedEngagementNumber() {
        return this.weightedEngagementNumber = {
          value: this.args.engagementNumber,
          weighted: this.calculateWeighted(this.args.engagementNumber),
          textPosition: this.calculateWeighted(this.args.engagementNumber) - 4.5,
        };
    }

    updateWeightedMilestones() {
        return this.weightedMilestones = milestones.map((milestone) => ({
            value: milestone,
            weighted: this.calculateWeighted(milestone),
            textPosition: this.calculateWeighted(milestone) - 8,
        }));
    }
};
