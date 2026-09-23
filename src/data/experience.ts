export type ExperienceItem = {
  period: string
  title: string
  summary?: string
  responsibilities?: string[]
  techStack?: string[]
}

export const experience: ExperienceItem[] = [
  {
    period: '2026 – Présent',
    title: 'OCP – Plateforme Collaborative Interne | Développeuse Full-Stack & QA',
    summary:
      'Développement d’une plateforme collaborative web interne pour faciliter la communication, la gestion de projets et la collaboration entre les différents départements de l’OCP. La plateforme est conçue pour être sécurisée, personnalisable, facile à utiliser et accessible sur différents appareils.',
    responsibilities: [
      'Développement du module Authentication & Identity Access Management (IAM) avec JWT et OTP.',
      'Conception et exécution de cas de tests fonctionnels, API, sécurité et performance.',
      'Documentation et validation des API REST avec Swagger/OpenAPI et Postman.',
      'Automatisation des tests et mise en place du pipeline CI/CD.',
      'Contribution au build, aux tests et à la validation des APIs.',
    ],
    techStack: [
      'Java 17',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'OTP',
      'React',
      'TypeScript',
      'PostgreSQL',
      'REST API',
      'Swagger/OpenAPI',
      'Postman',
      'Performance Testing',
      'Security Testing',
      'Maven',
      'Git',
      'GitHub Actions',
      'CI/CD',
    ],
  },
  {
    period: '2025',
    title: 'OCP – Safi | Stage en Développement Web & Informatique',
    summary:
      'Développement d’une application web de gestion des tickets IT destinée au suivi et à la résolution des incidents informatiques. L’application a été conçue pour centraliser les demandes, améliorer la réactivité et garantir un meilleur suivi des incidents informatiques.',
    responsibilities: [
      'Conception de l’application à l’aide de UML.',
      'Développement avec PHP, JavaScript, Bootstrap, MySQL et XAMPP.',
      'Mise en place de tableaux de bord et d’alertes en cas de saturation du stockage.',
      'Gestion et suivi des tickets internes.',
      'Réalisation de tests unitaires et amélioration de la sécurité, de la fiabilité et de l’ergonomie de l’application.',
    ],
    techStack: ['UML', 'PHP', 'JavaScript', 'Bootstrap', 'MySQL', 'XAMPP'],
  },
]
