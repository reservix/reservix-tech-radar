import { ringMap } from '../rings';

const { adopt, trial, assess, onHold } = ringMap;
export const quadrant = 1;

export const name = 'Platform & Services';

export const entries = [
  {
    label: 'MySQL',
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'PostgreSQL',
    quadrant,
    ring: trial,
    active: true,
    moved: 0,
  },
  {
    label: 'Elasticsearch',
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'Redis',
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'MongoDB',
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'DynamoDB',
    quadrant,
    ring: assess,
    active: true,
    moved: 0,
  },
  {
    label: 'AWS Lambda',
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'SQS',
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'SNS',
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'Keycloak',

    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'Kubernetes',
    quadrant,
    ring: trial,
    active: true,
    moved: 0,
  },
  {
    label: 'Helm',
    quadrant,
    ring: trial,
    active: true,
    moved: 0,
  },
];
