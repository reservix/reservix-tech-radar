function a(a,t,e,n){Object.defineProperty(a,t,{get:e,set:n,enumerable:!0,configurable:!0})}const t=[{id:"adopt",name:"Adopt",color:"#40c057"},{id:"trial",name:"Trial",color:"#93d2c2"},{id:"assess",name:"Assess",color:"#228be6"},{id:"onHold",name:"On Hold",color:"#ffa8a8"}],e=t.reduce(((a,t,e)=>(a[t.id]=e,a)),{});var n={};a(n,"quadrant",(()=>s)),a(n,"name",(()=>d)),a(n,"entries",(()=>c));const{adopt:i,trial:r,assess:o,onHold:l}=e,s=2,d="Languages & Frameworks",c=[{label:"PHP",link:"https://www.php.net/",quadrant:s,ring:i,active:!0,moved:0},{label:"Symfony",link:"https://symfony.com/",quadrant:s,ring:i,active:!0,moved:0},{label:"TypeScript",link:"https://www.typescriptlang.org/",quadrant:s,ring:i,active:!0,moved:0},{label:"JavaScript",quadrant:s,ring:l,active:!0,moved:0},{label:"React",link:"https://reactjs.org/",quadrant:s,ring:i,active:!0,moved:0},{label:"Vue",link:"https://vuejs.org/",quadrant:s,ring:r,active:!0,moved:0},{label:"C#",link:"https://docs.microsoft.com/en-us/dotnet/csharp/",quadrant:s,ring:i,active:!0,moved:0},{label:"Java",link:"https://www.java.com/",quadrant:s,ring:r,active:!0,moved:0},{label:"Zend",link:"https://framework.zend.com/",quadrant:s,ring:l,active:!0,moved:0},{label:"LESS",link:"https://lesscss.org/",quadrant:s,ring:l,active:!0,moved:0},{label:"Marigold",link:"https://marigold-ui.io/",quadrant:s,ring:r,active:!0,moved:0},{label:"Next.js",link:"https://nextjs.org/",quadrant:s,ring:o,active:!0,moved:0},{label:"express",link:"https://expressjs.com/",quadrant:s,ring:l,active:!0,moved:0},{label:"fastify",link:"https://www.fastify.io/",quadrant:s,ring:o,active:!0,moved:0}];var m={};a(m,"quadrant",(()=>b)),a(m,"name",(()=>w)),a(m,"entries",(()=>q));const{adopt:v,trial:p,assess:g,onHold:u}=e,b=0,w="API & IPC",q=[{label:"HTTP/REST",link:"https://en.wikipedia.org/wiki/Representational_state_transfer",quadrant:b,ring:v,active:!0,moved:0},{label:"SOAP",link:"https://en.wikipedia.org/wiki/SOAP",quadrant:b,ring:u,active:!0,moved:0},{label:"GraphQL",link:"https://graphql.org/",quadrant:b,ring:g,active:!0,moved:0},{label:"SQS",link:"https://aws.amazon.com/sqs/",quadrant:b,ring:u,active:!0,moved:0},{label:"SNS",link:"https://aws.amazon.com/sns/",quadrant:b,ring:p,active:!0,moved:0},{label:"EDA",link:"https://reservix.atlassian.net/wiki/spaces/AR/pages/950858048/Event-based+System+Communication+At+Reservix",quadrant:b,ring:p,active:!0,moved:0}];var h={};a(h,"quadrant",(()=>A)),a(h,"name",(()=>P)),a(h,"entries",(()=>H));const{adopt:k,trial:f,assess:S,onHold:y}=e,A=3,P="CI/CD, Infrastructure & Automation",H=[{label:"Docker",link:"https://www.docker.com/",quadrant:A,ring:k,active:!0,moved:0},{label:"GitLab CI",link:"https://docs.gitlab.com/ee/ci/",quadrant:A,ring:k,active:!0,moved:0},{label:"GitHub Actions",link:"https://github.com/features/actions",quadrant:A,ring:k,active:!0,moved:0},{label:"Kibana",link:"https://www.elastic.co/kibana/",quadrant:A,ring:k,active:!0,moved:0},{label:"Terraform",link:"https://www.terraform.io/",quadrant:A,ring:f,active:!0,moved:0},{label:"Serverless",link:"https://www.serverless.com/",quadrant:A,ring:S,active:!0,moved:0},{label:"SonarQube",link:"https://www.sonarqube.org/",quadrant:A,ring:S,active:!0,moved:0},{label:"Chromatic",link:"https://www.chromatic.com/",quadrant:A,ring:S,active:!0,moved:0},{label:"npm",link:"https://www.npmjs.com/",quadrant:A,ring:y,active:!0,moved:0},{label:"pnpm",link:"https://pnpm.io/",quadrant:A,ring:k,active:!0,moved:0},{label:"composer",link:"https://getcomposer.org/",quadrant:A,ring:k,active:!0,moved:0}];var j={};a(j,"quadrant",(()=>T)),a(j,"name",(()=>z)),a(j,"entries",(()=>D));const{adopt:R,trial:x,assess:C,onHold:L}=e,T=1,z="Platform & Services",D=[{label:"MySQL",link:"https://www.mysql.com/",quadrant:T,ring:R,active:!0,moved:0},{label:"PostgreSQL",link:"https://www.postgresql.org/",quadrant:T,ring:x,active:!0,moved:0},{label:"Elasticsearch",link:"https://www.elastic.co/",quadrant:T,ring:R,active:!0,moved:0},{label:"Redis",link:"https://redis.com/",quadrant:T,ring:R,active:!0,moved:0},{label:"MongoDB",link:"https://www.mongodb.com/",quadrant:T,ring:R,active:!0,moved:0},{label:"DynamoDB",link:"https://aws.amazon.com/dynamodb/",quadrant:T,ring:C,active:!0,moved:0},{label:"AWS Lambda",link:"https://aws.amazon.com/lambda/",quadrant:T,ring:R,active:!0,moved:0}],Q=[n,m,h,j].sort(((a,t)=>a.quadrant-t.quadrant)),E=[...n.entries,...m.entries,...h.entries,...j.entries];radar_visualization({svg_id:"radar",title:"Reservix Tech Radar — 2022 Q3",width:1500,height:1e3,colors:{background:"#fff",grid:"#adb5bd",inactive:"#dee2e6"},quadrants:Q,rings:t,print_layout:!0,entries:E});
//# sourceMappingURL=index.aa68bc7d.js.map
