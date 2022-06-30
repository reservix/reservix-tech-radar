import { ringMap } from '../rings';

const { adopt, trial, assess, onHold } = ringMap;
export const quadrant = 2;

export const name = 'Languages & Frameworks';

export const entries = [
  {
    label: 'PHP',
    description: [
      '<a href="https://www.php.net/">PHP</a> is popular general-purpose scripting language that is especially suited to web development. It is widely used and our developers are very proficient solving business problems with PHP.',
    ],
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'Symfony',
    description: [
      `The <a href="https://symfony.com/">Symfony</a> PHP framework is a well-organized, feature-rich PHP framework whose architecture paves the way for developers to build sustainable web applications in the easiest way possible which further enhances the users' experience. It is widely used in our organization and our developers have a lot of experience solving business problems with it.`,
    ],
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'TypeScript',
    description: [
      '<a href="https://www.typescriptlang.org/">TypeScript</a>, a statically typed language and superset of JavaScript, has become our sensible default. Large-scale projects benefit most from the type safety. TypeScritp requires minimal configuration management, has well-integrated IDE support and its ability to refactor code safely and gradually adopt types. The support from tooling and libraries is excellent.',
    ],
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'JavaScript',
    description: [
      '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript (JS)</a> is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. JavaScript is a dynamically typed language, which means that types are checked, and data type errors are only detected at runtime, which leads to errors only show during production.',
      'JavaScript is only suited for small-scale applications. TypeScript should be favored over JavaScript. TypeScript code is more reliable and easier to refactor. This enables developers to evade errors and do rewrites much easier.',
    ],
    quadrant,
    ring: onHold,
    active: true,
    moved: 0,
  },
  {
    label: 'React',
    description: [
      `In the avalanche of front-end JavaScript frameworks, <a href="https://reactjs.org/">React.js</a> stands out due to its design around a reactive data flow. Allowing only one-way data binding greatly simplifies the rendering logic and avoids many of the issues that commonly plague applications written with other frameworks. We're seeing the benefits of React.js on a growing number of projects, large and small, while at the same time we continue to be concerned about the state and the future of other popular frameworks like AngularJS. This has led to React.js becoming our default choice for JavaScript frameworks.`,
    ],
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'Vue',
    description: [
      `<a href="https://vuejs.org/">Vue.js</a> has become one of the successfully applied, loved and trusted frontend JavaScript frameworks among our community. Although there are other, well-adopted alternatives, such as React.js, the simplicity of Vue.js in API design, its clear segregation of directives and components (one file per component idiom) and its simpler state management have made it a compelling option among others.`,
    ],
    quadrant,
    ring: trial,
    active: true,
    moved: 0,
  },
  {
    label: 'C#',
    description: [
      `<a href="https://docs.microsoft.com/en-us/dotnet/csharp/">C#</a> is a modern, object-oriented, and type-safe programming language. C# enables developers to build many types of secure and robust applications that run in .NET.`,
    ],
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'Java',
    quadrant,
    ring: trial,
    active: true,
    moved: 0,
  },
  {
    label: 'Zend',
    quadrant,
    ring: onHold,
    active: true,
    moved: 0,
  },
  {
    label: 'LESS',
    quadrant,
    ring: onHold,
    active: true,
    moved: 0,
  },
  {
    label: 'Marigold',
    quadrant,
    ring: trial,
    active: true,
    moved: 0,
  },
  {
    label: 'Next.js',
    description: [
      `<a href="https://nextjs.org/">Next.js</a> is an opinionated, zero-configuration framework that includes simplified routing, automatic compilation and bundling with Webpack and Babel, fast hot reloading for a convenient developer workflow among other features. It provides server-side rendering by default, improves search engine optimization and the initial load time and supports incremental static generation. We've had positive experience reports from teams using Next.js and, given its large community, continue to be excited about the evolution of the framework.`,
    ],
    quadrant,
    ring: assess,
    active: true,
    moved: 0,
  },
  {
    label: 'express',
    quadrant,
    ring: onHold,
    active: true,
    moved: 0,
  },
  {
    label: 'fastify',
    quadrant,
    ring: assess,
    active: true,
    moved: 0,
  },
];
