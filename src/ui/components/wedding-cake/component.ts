import Component, { tracked } from "@glimmer/component";

import { endpoint } from '../../../utils/settings';

export default class WeddingCake extends Component {
    @tracked engagementNumber: number;

    didInsertElement() {
      this.getEngagementNumber();

      // refresh the number every 10 minutes
      setInterval(this.getEngagementNumber.bind(this), 1000 * 60 * 10);
    }

    async getEngagementNumber() {
      const response = await fetch(endpoint);
      const json = await response.json();
      this.engagementNumber = json.results[0].series[0].values[0][1];
    }
};
