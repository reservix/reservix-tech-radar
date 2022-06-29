import { ringMap } from '../rings';

const { adopt, trial, assess, onHold } = ringMap;
export const quadrant = 3;

export const name = 'CI/CD, Infrastructure & Automation';

export const entries = [
  {
    label: 'Docker',
    link: 'https://www.docker.com/',
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'GitLab CI',
    link: 'https://docs.gitlab.com/ee/ci/',
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'Kibana',
    link: 'https://www.elastic.co/kibana/',
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
];
