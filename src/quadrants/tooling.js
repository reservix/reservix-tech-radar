import { ringMap } from '../rings';

const { adopt, trial, assess, onHold } = ringMap;
export const quadrant = 0;

export const name = 'Tooling';

export const entries = [
  {
    label: 'npm',
    link: 'https://www.npmjs.com/',
    quadrant,
    ring: onHold,
    active: true,
    moved: 0,
  },
  {
    label: 'pnpm',
    description: [
      `<a href="https://pnpm.io/">pnpm</a> is an up-and-coming package manager for Node.js. It has higher speed and greater efficiency compared to other package managers (e.g. yarn and npm). Dependencies are saved in a single place on the disk and are linked into the respective node_modules directories. pnpm also supports incremental optimization on file level, provides a solid API foundation to allow extension/customization and supports store server mode, which speeds up dependency download even more.`,
      `This is why we recommend using pnpm over other package managers.`,
    ],
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'yarn (v1)',
    description: [
      `<a href="https://classic.yarnpkg.com/">Yarn</a> is a fast, reliable and secured package manager for JavaScript. Using a lock file and a deterministic algorithm, Yarn is able to guarantee that an installation that worked on one system will work exactly the same way on any other system. By efficiently queuing up requests, Yarn maximizes network utilization and as a result we’ve seen faster package downloads. Yarn continues to be the package manager of choice for many teams.`,
      `Fair warning though, Yarn 1 is now in maintenance mode and pnpm is the preferred package manager over Yarn 2.`,
    ],
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'yarn (v2)',
    description: [
      `<a href="https://yarnpkg.com/">Yarn 2</a>, a major new release with a long list of changes and improvements. In addition to usability tweaks and improvements in the area of workspaces, Yarn 2 introduces the concept of zero-installs, which allows developers to run a project directly after cloning it. However, Yarn 2 includes some breaking changes which makes the upgrade nontrivial. It also defaults to plug'n'play (PnP) environments and at the same time doesn't support React Native in PnP environments. Teams can, of course, opt out of PnP or stay on Yarn 1.`,
      `We advise against using Yarn 2, since even after years of its release the adoption rate of it is very low and toolins support is very poor.`,
    ],
    quadrant,
    ring: onHold,
    active: true,
    moved: 0,
  },
  {
    label: 'composer',
    description: [
      `<a href="https://getcomposer.org/">Composer</a> is a tool for dependency management in PHP. It is strongly influenced by tools from other technology stacks like Node's npm and Ruby's Bundler. We are now seeing wide adoption across PHP projects and it is fairly mature. You can still have to do some shims for internal libraries, you can use it for most external libraries.`,
    ],
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'Webpack',
    quadrant,
    ring: onHold,
    active: true,
    moved: 0,
  },
  {
    label: 'Parcel',
    quadrant,
    ring: trial,
    active: true,
    moved: 0,
  },
  {
    label: 'tsup',
    quadrant,
    ring: trial,
    active: true,
    moved: 0,
  },
  {
    label: 'jest',
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
];
