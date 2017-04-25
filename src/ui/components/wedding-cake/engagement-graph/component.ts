import Component, { tracked } from '@glimmer/component';

export default class EngagementGraph extends Component {
    @tracked data: number[] = [11220, 13720, 16220, 20000].reverse();
    @tracked chartPoints: string = this.data.map((value, index) => `${index*20},${Math.round(value/1000)}`).join(' ');
}; 
