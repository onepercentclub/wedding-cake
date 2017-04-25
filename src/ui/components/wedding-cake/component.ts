import Component, { tracked } from "@glimmer/component";

export default class WeddingCake extends Component {
    @tracked engagementNumber: number = 0;

    didInsertElement() {
        this.getEngagementNumber();

        // refresh the number every 10 minutes
        setInterval(this.getEngagementNumber, 1000 * 60 * 10);
    }

    async getEngagementNumber() {
        const response = await fetch('http://onepercent.localhost:8000/api/analytics/engagement-number');
        const json = await response.json();
        this.engagementNumber = json.engagement_number;
    }
};
