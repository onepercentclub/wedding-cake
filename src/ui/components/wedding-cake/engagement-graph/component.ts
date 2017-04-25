import Component, { tracked } from '@glimmer/component';

export default class EngagementGraph extends Component {
    @tracked weightedEngagementNumber: number = 0;

    didInsertElement() {
        this.updateWeightedEngagementNumber();
    }

    didUpdate() {
        this.updateWeightedEngagementNumber();
    }

    updateWeightedEngagementNumber() {
        return this.weightedEngagementNumber = Math.round((this.args.engagementNumber / 20000) * 100);
    }
}; 
