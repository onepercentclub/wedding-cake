import Component, { tracked } from "@glimmer/component";

export default class WeddingCake extends Component {
    @tracked engagementNumber: number = 200;

    didInsertElement() {
        setInterval(() => {
            this.engagementNumber = this.engagementNumber + 100;
        }, 1000);
    }
}
