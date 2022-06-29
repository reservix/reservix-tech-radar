import { ringMap } from '../rings';

const { adopt, trial, assess, onHold } = ringMap;
export const quadrant = 0;

export const name = 'API & IPC';

export const entries = [
  {
    label: 'HTTP/REST',
    link: 'https://en.wikipedia.org/wiki/Representational_state_transfer',
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'SOAP',
    link: 'https://en.wikipedia.org/wiki/SOAP',
    quadrant,
    ring: onHold,
    active: true,
    moved: 0,
  },
  {
    label: 'GraphQL',
    link: 'https://graphql.org/',
    quadrant,
    ring: assess,
    active: true,
    moved: 0,
  },
  {
    label: 'SQS',
    link: 'https://aws.amazon.com/sqs/',
    quadrant,
    ring: onHold,
    active: true,
    moved: 0,
  },
  {
    label: 'SNS',
    link: 'https://aws.amazon.com/sns/',
    quadrant,
    ring: trial,
    active: true,
    moved: 0,
  },
  {
    label: 'EDA',
    link: 'https://reservix.atlassian.net/wiki/spaces/AR/pages/950858048/Event-based+System+Communication+At+Reservix',
    quadrant,
    ring: trial,
    active: true,
    moved: 0,
  },
];
