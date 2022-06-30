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
    description: [
      `For problems that fit the document database model, <a href="https://www.mongodb.com/">MongoDB</a> is now the most popular choice. In addition to ease of use and a solid technical implementation, the community and ecosystem contributed to this success. We are aware of problems where teams were tempted by the popularity of MongoDB when a document database was not a good fit or they did not understand the inherent complexity. When used appropriately, however, MongoDB has proven itself on many projects.`,
    ],
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
