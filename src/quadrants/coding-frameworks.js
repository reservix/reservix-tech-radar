import { ringMap } from '../rings';

const { adopt, trial, assess, onHold } = ringMap;
export const quadrant = 2;

export const name = 'Languages & Frameworks';

export const entries = [
  {
    label: 'PHP',
    link: 'https://www.php.net/',
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'Symfony',
    link: 'https://symfony.com/',
    quadrant,
    ring: adopt,
    active: true,
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
  {
    label: 'React',
    link: 'https://reactjs.org/',
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'Vue',
    link: 'https://vuejs.org/',
    quadrant,
    ring: trial,
    active: true,
    moved: 0,
  },
  {
    label: 'C#',
    link: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'Java',
    link: 'https://www.java.com/',
    quadrant,
    ring: trial,
    active: true,
    moved: 0,
  },
  {
    label: 'Zend',
    link: 'https://framework.zend.com/',
    quadrant,
    ring: onHold,
    active: true,
    moved: 0,
  },
  {
    label: 'LESS',
    link: 'https://lesscss.org/',
    quadrant,
    ring: onHold,
    active: true,
    moved: 0,
  },
  {
    label: 'Marigold',
    link: 'https://marigold-ui.io/',
    quadrant,
    ring: trial,
    active: true,
    moved: 0,
  },
];
