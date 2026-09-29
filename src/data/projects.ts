typescript
export type Project = {
  name: string
  summary: string
  techStack: string[]
  features: string[]
  githubLink: string
  demoLink: string
  accent: string
}

export const projects: Project[] = [
  {
    name: 'OCP – Internal Collaborative Platform',
    summary:
      'Internal web-based collaborative platform designed to improve communication, project management, and coordination across OCP departments.',
    techStack: [
      'Java 17',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'OTP',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Swagger/OpenAPI',
      'Postman',
    ],
    features: [
      'IAM module with JWT and OTP authentication',
      'Access and role management',
      'Functional, API, security, and performance testing',
      'REST API documentation with Swagger',
      'API validation using Postman',
      'CI/CD pipeline for build and testing',
      'Contribution to product reliability and quality',
    ],
    githubLink:
      'https://github.com/FATIMA-BOUSMITI/Platform-collaboration-ocp-frontend',
    demoLink: 'https://example.com/ocp-collab-demo',
    accent: 'from-indigo-500/20 via-blue-500/15 to-cyan-500/20',
  },

  {
    name: 'eBus Smart Transport System',
    summary:
      'Smart transportation application designed to simplify bus selection, tracking, subscriptions, and secure digital payments for users.',
    techStack: [
      'Flutter',
      'Dart',
      'Spring Boot',
      'PostgreSQL',
      'Stripe',
      'JWT',
    ],
    features: [
      'Bus line selection',
      'Real-time transport tracking',
      'Transport subscriptions',
      'Stripe payment integration',
      'User profile and document management',
      'Lost and found item management',
      'JWT authentication',
      'REST APIs',
      'Backend deployment',
    ],
    githubLink: 'https://github.com/ikraammel/eBus_frontend',
    demoLink: 'https://example.com/ebus-demo',
    accent: 'from-emerald-500/20 via-teal-500/15 to-cyan-500/20',
  },

  {
    name: 'AgoraCampus',
    summary:
      'University web platform developed with Vue.js and Laravel to centralize courses, academic schedules, messages, user profiles, and academic dashboards.',
    techStack: [
      'Vue 3',
      'Vite',
      'JavaScript',
      'Laravel',
      'PHP',
      'MySQL',
      'REST API',
      'Axios',
    ],
    features: [
      'Student and administrative dashboards',
      'Academic calendar management',
      'Course and learning resource management',
      'Internal messaging and communication',
      'User profile management',
      'QR code scanning and quick access to features',
      'Decoupled frontend/backend architecture',
    ],
    githubLink: 'https://github.com/sofiastron/AgoraCampus.git',
    demoLink: 'https://example.com/agora-campus-demo',
    accent: 'from-cyan-500/20 via-sky-500/15 to-violet-500/20',
  },

  {
    name: 'SauceDemo QA Automation',
    summary:
      'Automated testing project for the SauceDemo web application, developed with Playwright and TypeScript to validate login flows, product interactions, and cart behavior using a maintainable Page Object Model structure.',
    techStack: [
      'Playwright',
      'TypeScript',
      'Page Object Model',
      'QA Automation',
      'Functional Testing',
    ],
    features: [
      'Login tests with valid and invalid credentials',
      'Product add/remove flow validation',
      'Cart state verification',
      'Reusable test structure using POM',
      'Functional UI test automation for web scenarios',
    ],
    githubLink:
      'https://github.com/FATIMA-BOUSMITI/SauceDemo-QA-Automation',
    demoLink: 'https://example.com/saucedemo-demo',
    accent: 'from-amber-500/20 via-orange-500/15 to-rose-500/20',
  },

  {
    name: 'IT Asset Management System',
    summary:
      'Web-based IT asset management application designed to track incidents, assign support tickets, and monitor technical interventions.',
    techStack: [
      'PHP',
      'MySQL',
      'Bootstrap',
      'JavaScript',
      'Tailwind CSS',
      'XAMPP',
    ],
    features: [
      'User and technician authentication',
      'Ticket submission and tracking',
      'Ticket assignment to technicians',
      'Technical dashboard',
      'Incident closure with detailed resolution',
      'Machine and failure status management',
    ],
    githubLink:
      'https://github.com/FATIMA-BOUSMITI/gestion-parc-info-ocp.git',
    demoLink: 'https://example.com/gestion-parc-demo',
    accent: 'from-slate-500/20 via-zinc-500/15 to-cyan-500/20',
  },
]

