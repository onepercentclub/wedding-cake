import Component, { tracked } from "@glimmer/component";

export default class WeddingCake extends Component {
    @tracked engagementNumber: number = 0;

    didInsertElement() {
        this.getEngagementNumber();
    }

    async getEngagementNumber() {
        const response = await fetch('http://onepercent.localhost:8000/api/analytics/engagement-number');
        console.log(response);
        const json = await response.json();
        this.engagementNumber = json.engagement_number;
    }
};
