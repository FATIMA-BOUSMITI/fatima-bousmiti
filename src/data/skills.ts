export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'QA & Testing',
    items: [
      'Functional Testing',
      'Regression Testing',
      'API Testing',
      'UI Testing',
      'Smoke Testing',
      'Test Cases',
      'Bug Reporting',
      'Test Planning',
    ],
  },
  {
    title: 'Automation',
    items: ['Selenium', 'Cypress', 'Playwright', 'Postman', 'Swagger', 'TestNG'],
  },
  {
    title: 'Frontend & Mobile',
    items: ['React', 'TypeScript', 'Flutter', 'Dart', 'Kotlin'],
  },
  {
    title: 'Backend & APIs',
    items: ['Java', 'Spring Boot', 'Node.js', 'Django', 'REST APIs', 'JWT'],
  },
  {
    title: 'Database & Validation',
    items: ['PostgreSQL', 'MySQL', 'Firebase', 'Supabase', 'SQL'],
  },
  {
    title: 'DevOps & Workflow',
    items: ['Git', 'GitHub', 'Docker', 'GitHub Actions', 'Jira', 'Trello', 'Agile'],
  },
]
