import Component, { tracked } from "@glimmer/component";

import { endpoint } from '../../../utils/settings';

export default class WeddingCake extends Component {
    @tracked engagementNumber: number = 0;

    didInsertElement() {
        this.getEngagementNumber();

        // refresh the number every 10 minutes
        setInterval(this.getEngagementNumber, 1000 * 60 * 10);
    }

    async getEngagementNumber() {
        const response = await fetch(endpoint);
        const json = await response.json();
        this.engagementNumber = json.engagement_number;
    }
};
