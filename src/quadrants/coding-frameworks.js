import { ringMap } from '../rings';

const { adopt, trial, assess, onHold } = ringMap;
export const quadrant = 2;

export const name = 'Coding & Frameworks';

export const entries = [
  {
    label: 'PHP',
    link: 'https://www.php.net/',
    quadrant,
    ring: adopt,
    active: false,
    moved: 0,
  },
  {
    label: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'JavaScript',
    quadrant,
    ring: onHold,
    active: true,
    moved: 0,
  },
];
