import Component, { tracked } from '@glimmer/component';

import { milestones, totalEngaged } from '../../../../utils/settings';

export default class EngagementGraph extends Component {
    @tracked weightedMilestones: object[] = [];
    @tracked weightedEngagementNumber: object = {
      weighted: 11,
      textPosition: 5,
    };

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
        return this.weightedEngagementNumber = {
          value: this.args.engagementNumber,
          weighted: this.calculateWeighted(this.args.engagementNumber),
          textPosition: this.calculateWeighted(this.args.engagementNumber) - 6,
        };
    }

    updateWeightedMilestones() {
        return this.weightedMilestones = milestones.map((milestone) => ({
            value: milestone,
            weighted: this.calculateWeighted(milestone),
            textPosition: this.calculateWeighted(milestone) - 6,
        }));
    }
};
