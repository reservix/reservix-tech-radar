function e(e,a,t,n){Object.defineProperty(e,a,{get:t,set:n,enumerable:!0,configurable:!0})}const a=[{id:"adopt",name:"Adopt",color:"#74b816"},{id:"trial",name:"Trial",color:"#228be6"},{id:"assess",name:"Assess",color:"#fab005"},{id:"onHold",name:"On Hold",color:"#fa5252"}],t=a.reduce(((e,a,t)=>(e[a.id]=t,e)),{});var n={};e(n,"quadrant",(()=>l)),e(n,"name",(()=>d)),e(n,"entries",(()=>c));const{adopt:r,trial:o,assess:i,onHold:s}=t,l=2,d="Languages & Frameworks",c=[{label:"PHP",description:['<a href="https://www.php.net/">PHP</a> is popular general-purpose scripting language that is especially suited to web development. It is widely used and our developers are very proficient solving business problems with PHP.'],quadrant:l,ring:r,active:!0,moved:0},{label:"Symfony",description:['The <a href="https://symfony.com/">Symfony</a> PHP framework is a well-organized, feature-rich PHP framework whose architecture paves the way for developers to build sustainable web applications in the easiest way possible which further enhances the users\' experience. It is widely used in our organization and our developers have a lot of experience solving business problems with it.'],quadrant:l,ring:r,active:!0,moved:0},{label:"TypeScript",description:['<a href="https://www.typescriptlang.org/">TypeScript</a>, a statically typed language and superset of JavaScript, has become our sensible default. Large-scale projects benefit most from the type safety. TypeScritp requires minimal configuration management, has well-integrated IDE support and its ability to refactor code safely and gradually adopt types. The support from tooling and libraries is excellent.'],quadrant:l,ring:r,active:!0,moved:0},{label:"JavaScript",description:['<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript (JS)</a> is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. JavaScript is a dynamically typed language, which means that types are checked, and data type errors are only detected at runtime, which leads to errors only show during production.',"JavaScript is only suited for small-scale applications. TypeScript should be favored over JavaScript. TypeScript code is more reliable and easier to refactor. This enables developers to evade errors and do rewrites much easier."],quadrant:l,ring:s,active:!0,moved:0},{label:"React",description:['In the avalanche of front-end JavaScript frameworks, <a href="https://reactjs.org/">React.js</a> stands out due to its design around a reactive data flow. Allowing only one-way data binding greatly simplifies the rendering logic and avoids many of the issues that commonly plague applications written with other frameworks. We\'re seeing the benefits of React.js on a growing number of projects, large and small, while at the same time we continue to be concerned about the state and the future of other popular frameworks like AngularJS. This has led to React.js becoming our default choice for JavaScript frameworks.'],quadrant:l,ring:r,active:!0,moved:0},{label:"Vue",description:['<a href="https://vuejs.org/">Vue.js</a> has become one of the successfully applied, loved and trusted frontend JavaScript frameworks among our community. Although there are other, well-adopted alternatives, such as React.js, the simplicity of Vue.js in API design, its clear segregation of directives and components (one file per component idiom) and its simpler state management have made it a compelling option among others.'],quadrant:l,ring:o,active:!0,moved:0},{label:"C#",description:['<a href="https://docs.microsoft.com/en-us/dotnet/csharp/">C#</a> is a modern, object-oriented, and type-safe programming language. C# enables developers to build many types of secure and robust applications that run in .NET.'],quadrant:l,ring:r,active:!0,moved:0},{label:"Java",quadrant:l,ring:o,active:!0,moved:0},{label:"Zend",quadrant:l,ring:s,active:!0,moved:0},{label:"LESS",quadrant:l,ring:s,active:!0,moved:0},{label:"Marigold",quadrant:l,ring:o,active:!0,moved:0},{label:"Next.js",description:['<a href="https://nextjs.org/">Next.js</a> is an opinionated, zero-configuration framework that includes simplified routing, automatic compilation and bundling with Webpack and Babel, fast hot reloading for a convenient developer workflow among other features. It provides server-side rendering by default, improves search engine optimization and the initial load time and supports incremental static generation. We\'ve had positive experience reports from teams using Next.js and, given its large community, continue to be excited about the evolution of the framework.'],quadrant:l,ring:i,active:!0,moved:0},{label:"express",quadrant:l,ring:s,active:!0,moved:0},{label:"fastify",quadrant:l,ring:i,active:!0,moved:0}];var m={};e(m,"quadrant",(()=>v)),e(m,"name",(()=>f)),e(m,"entries",(()=>b));const{adopt:p,trial:u,assess:h,onHold:g}=t,v=0,f="Tooling",b=[{label:"npm",link:"https://www.npmjs.com/",quadrant:v,ring:g,active:!0,moved:0},{label:"pnpm",description:['<a href="https://pnpm.io/">pnpm</a> is an up-and-coming package manager for Node.js. It has higher speed and greater efficiency compared to other package managers (e.g. yarn and npm). Dependencies are saved in a single place on the disk and are linked into the respective node_modules directories. pnpm also supports incremental optimization on file level, provides a solid API foundation to allow extension/customization and supports store server mode, which speeds up dependency download even more.',"This is why we recommend using pnpm over other package managers."],quadrant:v,ring:p,active:!0,moved:0},{label:"yarn (v1)",description:['<a href="https://classic.yarnpkg.com/">Yarn</a> is a fast, reliable and secured package manager for JavaScript. Using a lock file and a deterministic algorithm, Yarn is able to guarantee that an installation that worked on one system will work exactly the same way on any other system. By efficiently queuing up requests, Yarn maximizes network utilization and as a result we’ve seen faster package downloads. Yarn continues to be the package manager of choice for many teams.',"Fair warning though, Yarn 1 is now in maintenance mode and pnpm is the preferred package manager over Yarn 2."],quadrant:v,ring:p,active:!0,moved:0},{label:"yarn (v2)",description:["<a href=\"https://yarnpkg.com/\">Yarn 2</a>, a major new release with a long list of changes and improvements. In addition to usability tweaks and improvements in the area of workspaces, Yarn 2 introduces the concept of zero-installs, which allows developers to run a project directly after cloning it. However, Yarn 2 includes some breaking changes which makes the upgrade nontrivial. It also defaults to plug'n'play (PnP) environments and at the same time doesn't support React Native in PnP environments. Teams can, of course, opt out of PnP or stay on Yarn 1.","We advise against using Yarn 2, since even after years of its release the adoption rate of it is very low and toolins support is very poor."],quadrant:v,ring:g,active:!0,moved:0},{label:"composer",description:["<a href=\"https://getcomposer.org/\">Composer</a> is a tool for dependency management in PHP. It is strongly influenced by tools from other technology stacks like Node's npm and Ruby's Bundler. We are now seeing wide adoption across PHP projects and it is fairly mature. You can still have to do some shims for internal libraries, you can use it for most external libraries."],quadrant:v,ring:p,active:!0,moved:0},{label:"Webpack",quadrant:v,ring:g,active:!0,moved:0},{label:"Parcel",quadrant:v,ring:u,active:!0,moved:0},{label:"tsup",quadrant:v,ring:u,active:!0,moved:0},{label:"jest",quadrant:v,ring:p,active:!0,moved:0}];var w={};e(w,"quadrant",(()=>P)),e(w,"name",(()=>T)),e(w,"entries",(()=>I));const{adopt:y,trial:k,assess:q,onHold:S}=t,P=3,T="CI/CD, Infrastructure & Automation",I=[{label:"Docker",link:"https://www.docker.com/",quadrant:P,ring:y,active:!0,moved:0},{label:"GitLab CI",link:"https://docs.gitlab.com/ee/ci/",quadrant:P,ring:y,active:!0,moved:0},{label:"GitHub Actions",link:"https://github.com/features/actions",quadrant:P,ring:y,active:!0,moved:0},{label:"Kibana",link:"https://www.elastic.co/kibana/",quadrant:P,ring:y,active:!0,moved:0},{label:"Terraform",link:"https://www.terraform.io/",quadrant:P,ring:k,active:!0,moved:0},{label:"SonarQube",link:"https://www.sonarqube.org/",quadrant:P,ring:q,active:!0,moved:0},{label:"Chromatic",link:"https://www.chromatic.com/",quadrant:P,ring:q,active:!0,moved:0}];var j={};e(j,"quadrant",(()=>R)),e(j,"name",(()=>L)),e(j,"entries",(()=>B));const{adopt:x,trial:H,assess:E,onHold:A}=t,R=1,L="Platform & Services",B=[{label:"MySQL",quadrant:R,ring:x,active:!0,moved:0},{label:"PostgreSQL",quadrant:R,ring:H,active:!0,moved:0},{label:"Elasticsearch",quadrant:R,ring:x,active:!0,moved:0},{label:"Redis",quadrant:R,ring:x,active:!0,moved:0},{label:"MongoDB",description:['For problems that fit the document database model, <a href="https://www.mongodb.com/">MongoDB</a> is now the most popular choice. In addition to ease of use and a solid technical implementation, the community and ecosystem contributed to this success. We are aware of problems where teams were tempted by the popularity of MongoDB when a document database was not a good fit or they did not understand the inherent complexity. When used appropriately, however, MongoDB has proven itself on many projects.'],quadrant:R,ring:x,active:!0,moved:0},{label:"DynamoDB",quadrant:R,ring:E,active:!0,moved:0},{label:"AWS Lambda",quadrant:R,ring:x,active:!0,moved:0},{label:"SQS",quadrant:R,ring:x,active:!0,moved:0},{label:"SNS",quadrant:R,ring:x,active:!0,moved:0},{label:"Keycloak",quadrant:R,ring:x,active:!0,moved:0},{label:"Kubernetes",quadrant:R,ring:H,active:!0,moved:0},{label:"Helm",quadrant:R,ring:H,active:!0,moved:0},{label:"GraphQL",description:['There are many successful <a href="https://github.com/facebook/graphql">GraphQL</a> implementations in our projects. That said, we\'ve concerns about misuse of this framework and some of the problems that can occur. Examples include performance gotchas around N+1 queries and lots of boilerplate code needed when adding new models, leading to complexity. There are workarounds to these gotchas such as query caching.',"Even though it's not a silver bullet, we still think it's worth trying it as part of your architecture."],quadrant:R,ring:H,active:!0,moved:0},{label:"HTTP/REST",description:["A REST API (also known as RESTful API) is an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services.","While REST APIs have their shortcommings (e.g. under or over data-fetching), REST APIs are scalable and allows developers to structure data as per their needs and the client knows what structure of data to expect. Moreover, this enables you to use many third-party APIs as well, by just simply seeing their sample data responses, and the best part is you probably don’t have to manage any of these third-party APIs."],quadrant:R,ring:x,active:!0,moved:0},{label:"Event-driven",description:["Message-driven system integration provides multiple benefits. One remarkable benefit is that this integration style uses asynchronous communication, i.e. the temporal decoupling of sender and receiver. At Reservix, we have started to establish an event-driven architecture as our preferred way of system integration",'You can read more about this topics <a href="https://reservix.atlassian.net/l/c/H4Hvr9k0">here.</a>'],quadrant:R,ring:H,active:!0,moved:0},{label:"Serverless",link:"https://www.serverless.com/",quadrant:R,ring:H,active:!0,moved:0}],J=[n,m,w,j].sort(((e,a)=>e.quadrant-a.quadrant)),Y=[...n.entries,...m.entries,...w.entries,...j.entries];radar_visualization({svg_id:"radar",title:"Reservix Tech Radar — 2022 Q3 (work in progress)",width:1500,height:1e3,colors:{background:"#fff",grid:"#adb5bd",inactive:"#dee2e6"},quadrants:J,rings:a,print_layout:!0,entries:Y});const D=document.getElementById("radar"),M=document.getElementById("dialog"),N=document.getElementById("dialog-title"),z=document.getElementById("dialog-content"),W=document.getElementById("dialog-badge");document.addEventListener("click",(e=>{e.preventDefault();const t=e.target;if((e=>D.contains(e)&&"text"===e.tagName&&"a"===e.parentElement?.tagName)(t)){const e=(n=(e=>/\s(.*)/.exec(e.textContent)[1])(t),Y.find((e=>e.label===n)));return N.innerHTML=e.label,z.innerHTML=e.description?.map((e=>`<p>${e}</p>`)).join("")||"TDB",W.innerHTML=a[e.ring].name,W.style=`background: ${a[e.ring].color}`,void M.showModal()}var n;"dialog"===t.tagName.toLocaleLowerCase()&&M.close()}));
//# sourceMappingURL=index.119f2b91.js.map
