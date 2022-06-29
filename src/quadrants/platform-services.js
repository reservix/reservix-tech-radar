import { ringMap } from '../rings';

const { adopt, trial, assess, onHold } = ringMap;
export const quadrant = 1;

export const name = 'Platform & Services';

export const entries = [
  {
    label: 'MySQL',
    link: 'https://www.mysql.com/',
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'PostgreSQL',
    link: 'https://www.postgresql.org/',
    quadrant,
    ring: trial,
    active: true,
    moved: 0,
  },
  {
    label: 'Elasticsearch',
    link: 'https://www.elastic.co/',
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'Redis',
    link: 'https://redis.com/',
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'MongoDB',
    link: 'https://www.mongodb.com/',
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'HTTP/REST',
    link: 'https://en.wikipedia.org/wiki/Representational_state_transfer',
    quadrant,
    ring: adopt,
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
];
