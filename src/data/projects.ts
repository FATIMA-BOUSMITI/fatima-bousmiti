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
    name: 'OCP – Plateforme Collaborative Interne',
    summary:
      'Plateforme collaborative web interne conçue pour améliorer la communication, la gestion de projets et la coordination entre départements au sein de l’OCP.',
    techStack: ['Java 17', 'Spring Boot', 'Spring Security', 'JWT', 'OTP', 'React', 'TypeScript', 'PostgreSQL', 'Swagger/OpenAPI', 'Postman'],
    features: [
      'Module IAM avec authentification JWT et OTP',
      'Gestion des accès et des rôles',
      'Tests fonctionnels, API, sécurité et performance',
      'Documentation des API REST avec Swagger',
      'Validation via Postman',
      'Pipeline CI/CD pour build et tests',
      'Contribution à la fiabilité et à la qualité du produit',
    ],
    githubLink: 'https://github.com/FATIMA-BOUSMITI/Platform-collaboration-ocp-frontend',
    demoLink: 'https://example.com/ocp-collab-demo',
    accent: 'from-indigo-500/20 via-blue-500/15 to-cyan-500/20',
  },
  {
    name: 'eBus Smart Transport System',
    summary:
      'A smart transportation application designed to simplify bus selection, tracking, subscriptions and secure digital payments for users.',
    techStack: ['Flutter', 'Dart', 'Spring Boot', 'PostgreSQL', 'Stripe', 'JWT'],
    features: [
      'Bus line selection',
      'Transport tracking',
      'Subscriptions',
      'Stripe payment integration',
      'User dossiers',
      'Lost object management',
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
      'Plateforme web universitaire développée avec Vue.js et Laravel pour centraliser les cours, le calendrier, les messages, le profil utilisateur et le dashboard académique.',
    techStack: ['Vue 3', 'Vite', 'JavaScript', 'Laravel', 'PHP', 'MySQL', 'REST API', 'Axios'],
    features: [
      'Dashboard étudiant et administratif',
      'Gestion du calendrier académique',
      'Consultation des cours et ressources',
      'Messages internes et communication',
      'Profil utilisateur',
      'Scan QR et accès rapide aux fonctionnalités',
      'Architecture front-end/back-end découplée',
    ],
    githubLink: 'https://github.com/sofiastron/AgoraCampus.git',
    demoLink: 'https://example.com/agora-campus-demo',
    accent: 'from-cyan-500/20 via-sky-500/15 to-violet-500/20',
  },
  {
    name: 'SauceDemo QA Automation',
    summary:
      'Automated test project for the SauceDemo web application, created with Playwright and TypeScript to validate login flows, product interaction, and cart behavior using a maintainable Page Object Model structure.',
    techStack: ['Playwright', 'TypeScript', 'Page Object Model', 'QA Automation', 'Functional Testing'],
    features: [
      'Login tests with valid and invalid credentials',
      'Product add/remove flow validation',
      'Cart state verification',
      'Reusable test structure with POM',
      'Functional UI automation for web scenarios',
    ],
    githubLink: 'https://github.com/FATIMA-BOUSMITI/SauceDemo-QA-Automation',
    demoLink: 'https://example.com/saucedemo-demo',
    accent: 'from-amber-500/20 via-orange-500/15 to-rose-500/20',
  },
  {
    name: 'Gestion Parc Informatique',
    summary:
      'Application web de gestion du parc informatique pour le suivi des incidents, l’attribution des tickets et la supervision des interventions techniques.',
    techStack: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'Tailwind CSS', 'XAMPP'],
    features: [
      'Connexion utilisateur et technicien',
      'Soumission et suivi des tickets',
      'Assignation des tickets aux techniciens',
      'Tableau de bord technique',
      'Clôture d’incidents avec résolution détaillée',
      'Gestion des machines et des statuts de panne',
    ],
    githubLink: 'https://github.com/FATIMA-BOUSMITI/gestion-parc-info-ocp.git',
    demoLink: 'https://example.com/gestion-parc-demo',
    accent: 'from-slate-500/20 via-zinc-500/15 to-cyan-500/20',
  },
]
