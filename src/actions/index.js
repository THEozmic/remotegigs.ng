import axios from "axios";

const jobs = [
  {
    slug: "66550-remote-software-developer-harris",
    id: "66550",
    epoch: "1524000297",
    date: "2018-04-17T14:24:57-07:00",
    company: "Harris",
    position: "Software Developer",
    tags: ["dev", "digital nomad"],
    logo: "",
    description:
      "<p>Syscon Justice Systems is seeking a Developer to strengthen their R&amp;D Operations department.</p><br /><p>As a core member of the R&amp;D Operations group, the Developer is entrusted to successfully deliver on key deliverables, such as requirements gathering, solutions design, documentation, quality assurance, and knowledge management. In addition to the timely and quality of software delivery for our clients, this role will also be responsible for providing process guidance and knowledge mentorship to all members in the organization.&nbsp;</p><br /><br /><br /><br /><p><strong><strong><span>Primary Functions</span></strong></strong></p><br /><br /><br /><br /><p><strong>General&nbsp;</strong></p><br /><ul><br /><li>Developing, maintaining, and testing commercial applications and enhancements</li><br /><li>Working with other technically skilled staff on a multi-disciplinary team</li><br /><li>Working with a small, dedicated team on system architecture and high-level design</li><br /><li>Independent low-level design and coding of core product features and functionality</li><br /><li>Managing change control and product releases in conjunction with the QA team</li><br /></ul><br /><br /><p><strong>Specific</strong></p><br /><ul><br /><li>Integrating new features using (mobile, web, kiosks, phone)</li><br /><li>Integrating third-party hardware using third-party APIs and drivers</li><br /><li>Maintaining product installers (InstallShield) across product versions</li><br /><li>Integrating credit card gateways and Check21 (ICL) bank files into core application</li><br /></ul><br /><br /><br /><br /><p><strong><strong><span>Qualifications</span></strong></strong></p><br /><br /><br /><br /><ul><br /><li>Must have 5+ years developing commercial enterprise applications in Oracle Forms technology</li><br /><li>Must have strong database design skills, Oracle Database and PL/SQL</li><br /><li>Must be able to write efficient, complex queries against very large data sets.</li><br /><li>Must have experience in both high-level (system) and low-level software design</li><br /><li>Must be able to independently design and code add-on features to existing code base</li><br /><li>Must have experience developing and maintaining publicly published APIs</li><br /><li>Must have excellent written and verbal communication skills and use of MS Office</li><br /><li>Prefer experience using AccuRev, PVCS, Git</li><br /><li>Prefer experience using Jira, Salesforce</li><br /><li>Prefer development experience with Java, C#</li><br /><li>Prefer strong web development skills using ASP.NET, CSS and AJAX</li><br /><li>Prefer experience in POS or other hardware integration using third-party APIs</li><br /></ul>",
    url: "https://remoteok.io/jobs/66550"
  },
  {
    slug: "66548-remote-customer-success-architect-auth0",
    id: "66548",
    epoch: "1523991438",
    date: "2018-04-17T11:57:18-07:00",
    company: "Auth0",
    position: "Customer Success Architect",
    tags: ["architecture", "support"],
    logo: "",
    description:
      "<p>Auth0 provides an enterprise-grade platform that secures billions of log-ins every year. The company makes it easy to implement even the most complex identity solutions for their web, mobile, IoT and internal applications, as well as sophisticated identity management for employees, customers and partners. Auth0 has raised over $54 million from Meritech Capital, NTT DoCoMo, Trinity Ventures, Bessemer Venture Partners, K9 Ventures, Silicon Valley Bank, Founders Co-Op, Portland Seed Fund and NXTP Labs.</p><br /><p>The Customer Success Architect (CSA) is a customer facing role requiring a unique combination of technical knowledge, vision and leadership. The CSA owns the technical guidance and leadership in key customers, driving them to ongoing success with the Auth0 platform, and working in partnership with the Customer Success Manager. CSA&rsquo;s will work closely with customers from onboarding to go-live and throughout the customer lifecycle.</p><br /><p><strong>Responsibilities:</strong></p><br /><ul><br /><li>You will work in partnership with Customer Success Managers (CSM) to accelerate successful adoption and growth within enterprise customer accounts. &nbsp;CSMs focus on the business relationship and leadership while the CSA will focus on technical relationships and leadership. &nbsp;Together, you&rsquo;ll be a highly valued resource for customers.</li><br /><li>You will immerse yourself in the projects and goals of a handful of key accounts.</li><br /><li>You will provide the customer with architectural guidance and technical leadership, helping translate business and security requirements into technical requirements and projects Auth0 can fulfill.</li><br /><li>You will be responsible to advance customers integration maturity by providing guidance around common patterns and best practices.</li><br /><li>You will help customers to set up centers for &ldquo;enablement&rdquo;, including identifying and supporting the training of Auth0 experts and building knowledge and code repositories. You will identify technical projects that can be driven by the Auth0 Professional Services team and oversee the successful management and execution of these projects within your customer base.</li><br /><li>You will provide a support handover at customer go-live, collating and providing all technical and architectural documentation specific to the customer&rsquo;s integration to set up Auth0&rsquo;s support team for success.</li><br /><li>You will feedback your real world technical experience with customers through engineering, content and product teams to advocate for customer trends, product improvements and provide training/knowledge transfer.</li><br /></ul><br /><p><strong>Requirements:</strong></p><br /><ul><br /><li>In depth knowledge and experience across any common development languages/technologies, with node.js and front-end development framework knowledge being a plus.</li><br /><li>Technical knowledge of authentication and authorization protocols and application security.</li><br /><li>Familiarity with the whole development lifecycle including modern development tools, languages and frameworks, continuous integration/deployments tools and monitoring, performance and optimization practices.</li><br /><li>Ability to evaluate security solution architecture from an application perspective and make recommendations for improvement in relation to identity, authentication and security, making use of the Auth0 platform.</li><br /><li>Ability to evaluate and connect technical needs with line of business needs. &nbsp;This could include explaining technical concepts to non-technical stakeholders as required.</li><br /><li>Experience with championing and driving the development of product software features and extensions by working in conjunction with internal engineering teamsDeep passion for making customers successful and expanding their use of Auth0 products and services.</li><br /><li>Comfort in multitasking across parallel work streams, juggling different roles and priorities in each.</li><br /><li>Excellent written and verbal communication skillsAbility to set expectations and communicate goals and objectives with customers and teammates.</li><br /><li>Ability to communicate, influence, build and maintain strong working relationships with stakeholders at all levels in order to achieve successful outcomes for the customer and Auth0.</li><br /></ul><br /><p>Auth0 values diversity and inclusion and is an equal opportunity employer. We do not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status. Auth0 participates in E-Verify and will provide the federal government with your Form I-9 information to confirm that you are authorized to work in the U.S.</p>",
    url: "https://remoteok.io/jobs/66548"
  }
];

export function apiGetJobs() {
  return function action(dispatch) {
    const request = axios({
      method: "GET",
      url: "https://remoteok.io/api?ref=remotegigs.ng"
    });
    return request
      .then(response => {
        console.log(response, "Stuff");
        dispatch(getJobsSuccess(response.data));
      })
      .catch(error => {
        dispatch(getJobsSuccess(jobs));
      });
  };
}

export function updateJobs(jobs) {
  return getJobsSuccess(jobs);
}

const getJobsRequest = () => ({
  type: "FETCH_POSTS_REQUEST"
});

const getJobsFailure = error => ({
  type: "FETCH_POSTS_FAILURE",
  error
});

const getJobsSuccess = response => ({
  type: "FETCH_POSTS_SUCCESS",
  response
});
