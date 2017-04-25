import Component, { tracked } from '@glimmer/component';

import { milestones, totalEngaged } from '../../../../utils/settings';

export default class EngagementGraph extends Component {
    @tracked weightedMilestones: number[] = [];
    @tracked weightedEngagementNumber: number = 0;

    didInsertElement() {
        this.updateWeightedEngagementNumber();
        this.updateWeightedMilestones();
    }

    didUpdate() {
        this.updateWeightedEngagementNumber();
    }

    calculateWeighted(n: number) {
        return Math.round((n / totalEngaged) * 100);
    }

    updateWeightedEngagementNumber() {
        return this.weightedEngagementNumber = this.calculateWeighted(this.args.engagementNumber);
    }

    updateWeightedMilestones() {
        return this.weightedMilestones = milestones.map((milestone) => this.calculateWeighted(milestone));
    }
}; 
