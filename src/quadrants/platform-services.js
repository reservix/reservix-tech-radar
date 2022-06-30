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
  {
    label: 'GraphQL',
    description: [
      `There are many successful <a href="https://github.com/facebook/graphql">GraphQL</a> implementations in our projects. That said, we've concerns about misuse of this framework and some of the problems that can occur. Examples include performance gotchas around N+1 queries and lots of boilerplate code needed when adding new models, leading to complexity. There are workarounds to these gotchas such as query caching.`,
      `Even though it's not a silver bullet, we still think it's worth trying it as part of your architecture.`,
    ],
    quadrant,
    ring: trial,
    active: true,
    moved: 0,
  },
  {
    label: 'HTTP/REST',
    description: [
      `A REST API (also known as RESTful API) is an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services.`,
      `While REST APIs have their shortcommings (e.g. under or over data-fetching), REST APIs are scalable and allows developers to structure data as per their needs and the client knows what structure of data to expect. Moreover, this enables you to use many third-party APIs as well, by just simply seeing their sample data responses, and the best part is you probably don’t have to manage any of these third-party APIs.`,
    ],
    quadrant,
    ring: adopt,
    active: true,
    moved: 0,
  },
  {
    label: 'Event-driven',
    description: [
      `Message-driven system integration provides multiple benefits. One remarkable benefit is that this integration style uses asynchronous communication, i.e. the temporal decoupling of sender and receiver. At Reservix, we have started to establish an event-driven architecture as our preferred way of system integration`,
      `You can read more about this topics <a href="https://reservix.atlassian.net/l/c/H4Hvr9k0">here.</a>`,
    ],
    quadrant,
    ring: trial,
    active: true,
    moved: 0,
  },
  {
    label: 'Serverless',
    link: 'https://www.serverless.com/',
    quadrant,
    ring: trial,
    active: true,
    moved: 0,
  },
];
