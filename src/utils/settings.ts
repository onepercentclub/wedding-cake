const ENV = { environment: 'development' }; // this should be imported

export const endpoint: string = ENV.environment === 'production'
    ? 'http://onepercent.localhost:8000/api/analytics/engagement-number'
    : 'http://onepercent.localhost:8000/api/analytics/engagement-number';

export const milestones: number[] = [
    11220,
    13720,
    16220
];

export const totalEngaged: number = 20000;