export type Locale = 'fr' | 'en';

export interface Metric {
  value: string;
  label: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  status?: string;
  bullets: string[];
}

export interface Project {
  name: string;
  eyebrow: string;
  description: string;
  tags: string[];
  repository?: string;
  caseStudy?: string;
}

export interface PortfolioContent {
  locale: Locale;
  meta: { title: string; description: string };
  nav: { work: string; experience: string; skills: string; contact: string; language: string };
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    availability: string;
    contact: string;
    cv: string;
    diagramLabel: string;
  };
  metrics: Metric[];
  projects: { eyebrow: string; title: string; intro: string; source: string; read: string; items: Project[] };
  experience: { eyebrow: string; title: string; items: Experience[] };
  skills: { eyebrow: string; title: string; groups: { name: string; items: string[] }[] };
  profile: {
    certificationLabel: string;
    certificationTitle: string;
    certificationDetail: string;
    educationLabel: string;
    educationTitle: string;
    educationDetail: string;
    languageLabel: string;
    languageDetail: string;
  };
  contact: { eyebrow: string; title: string; body: string; email: string; linkedin: string };
  footer: string;
}

export const portfolioContent: Record<Locale, PortfolioContent> = {
  fr: {
    locale: 'fr',
    meta: {
      title: 'Tom Mendy | DevOps & Platform Engineer',
      description: 'Portfolio de Tom Mendy, étudiant Epitech certifié CKAD, à la recherche d’un stage de fin d’études DevOps ou Platform Engineering en 2027.',
    },
    nav: { work: 'Projets', experience: 'Expérience', skills: 'Compétences', contact: 'Contact', language: 'English' },
    hero: {
      eyebrow: 'DevOps / Platform Engineer · Bordeaux',
      title: 'Je rends les déploiements plus courts et les systèmes plus prévisibles.',
      intro: 'Étudiant en 5e année à Epitech et certifié CKAD. Je travaille sur les pipelines CI/CD, Kubernetes, l’infrastructure as code et l’observabilité, avec deux expériences en entreprise et un homelab que j’administre au quotidien.',
      availability: 'Stage de fin d’études · 6 mois · mars à août 2027',
      contact: 'Me contacter',
      cv: 'Télécharger mon CV',
      diagramLabel: 'Schéma montrant un changement Git traversant les contrôles CI, Flux et Helm avant d’atteindre un cluster Kubernetes à trois nœuds.',
    },
    metrics: [
      { value: '< 3 min', label: 'pour déployer, contre environ 10 minutes auparavant' },
      { value: '5 min', label: 'pour traiter une charge Java qui demandait environ 30 minutes' },
      { value: '3 nœuds', label: 'dans mon cluster Kubernetes personnel' },
      { value: 'CKAD', label: 'certification valide jusqu’en août 2028' },
    ],
    projects: {
      eyebrow: 'Projets sélectionnés',
      title: 'Des systèmes qui tournent vraiment.',
      intro: 'Le homelab est mon terrain d’exploitation. Whanos m’a appris à construire une chaîne de déploiement. Sumfleet me place à l’interface entre plateforme et produit.',
      source: 'Voir le dépôt',
      read: 'Lire l’étude de cas',
      items: [
        {
          name: 'Homelab Kubernetes',
          eyebrow: 'Projet phare · personnel et public',
          description: 'Un cluster de trois nœuds piloté par Flux et Helm. J’y gère l’ingress, les secrets, PostgreSQL, le stockage NFS, l’observabilité et les procédures de reprise.',
          tags: ['Kubernetes', 'Flux', 'Helm', 'Infisical', 'CloudNativePG'],
          repository: 'https://github.com/Tom-Mendy/homelab',
          caseStudy: '/projects/homelab/',
        },
        {
          name: 'Whanos',
          eyebrow: 'Projet Epitech · 2024',
          description: 'Une plateforme Jenkins qui détecte la technologie d’un dépôt, construit et publie son image Docker, puis le déploie sur Kubernetes selon un fichier whanos.yml.',
          tags: ['Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'],
          repository: 'https://github.com/Tom-Mendy/Whanos',
        },
        {
          name: 'Sumfleet',
          eyebrow: 'Projet de fin d’études · depuis 2025',
          description: 'Environnements de développement standardisés avec Dev Containers, tests E2E Playwright conteneurisés et déploiements staging et production avec Docker Compose.',
          tags: ['Next.js', 'ElysiaJS', 'PostgreSQL', 'Playwright', 'Docker'],
        },
      ],
    },
    experience: {
      eyebrow: 'Expérience',
      title: 'Automatiser, mesurer, recommencer.',
      items: [
        {
          company: 'Axians France',
          role: 'Stage DevOps à temps partiel',
          period: 'sept. 2026 à févr. 2027',
          status: 'Stage confirmé',
          bullets: ['Mission au sein de l’équipe Intégration de Services, en parallèle de la 5e année à Epitech.'],
        },
        {
          company: 'Axians France',
          role: 'Stagiaire ingénieur d’études',
          period: 'mars à août 2025',
          bullets: [
            'Migration de dépôts et pipelines Azure DevOps vers GitLab CI/CD, avec SonarQube, Docker et Trivy.',
            'Automatisation des déploiements Angular et Spring Boot sur Windows Server et Linux. Durée ramenée d’environ 10 minutes à moins de 3 minutes.',
            'Traitement Java parallélisé par multithreading. Temps réduit d’environ 30 à 5 minutes sur une charge comparable.',
          ],
        },
        {
          company: 'Belharra Numérique',
          role: 'Stagiaire DevOps',
          period: 'juil. à déc. 2023',
          bullets: [
            'Conteneurisation d’applications Spring Boot et création d’un chart Helm pour un POC Kubernetes.',
            'Préparation de serveurs de test Linux et mise en place de tests JMeter, Prometheus, Grafana, Loki et Promtail.',
          ],
        },
      ],
    },
    skills: {
      eyebrow: 'Boîte à outils',
      title: 'Les outils que j’utilise pour livrer et exploiter.',
      groups: [
        { name: 'Conteneurs et orchestration', items: ['Docker', 'Kubernetes', 'Helm', 'Traefik', 'NFS'] },
        { name: 'CI/CD et infrastructure', items: ['GitLab CI/CD', 'GitHub Actions', 'Jenkins', 'Terraform', 'Ansible'] },
        { name: 'Observabilité et sécurité', items: ['Prometheus', 'Grafana', 'Loki', 'SonarQube', 'Trivy', 'Infisical'] },
        { name: 'Développement et données', items: ['Bash', 'Python', 'Go', 'Java / Spring Boot', 'TypeScript', 'PostgreSQL'] },
      ],
    },
    profile: {
      certificationLabel: 'Certification',
      certificationTitle: 'Certified Kubernetes Application Developer',
      certificationDetail: 'Linux Foundation · obtenue en août 2026 · valide jusqu’en août 2028',
      educationLabel: 'Formation',
      educationTitle: 'Epitech Bordeaux',
      educationDetail: 'Expert en technologies de l’information · RNCP niveau 7 · 2022 à 2027',
      languageLabel: 'Langues',
      languageDetail: 'Français natif · anglais professionnel B2',
    },
    contact: {
      eyebrow: 'Mars 2027',
      title: 'Je cherche une équipe qui traite la plateforme comme un produit.',
      body: 'Je suis disponible pour un stage de fin d’études de six mois, de mars à août 2027. Le plus simple est de m’écrire directement.',
      email: 'Écrire un e-mail',
      linkedin: 'Voir mon LinkedIn',
    },
    footer: 'Conçu et développé par Tom Mendy avec Astro.',
  },
  en: {
    locale: 'en',
    meta: {
      title: 'Tom Mendy | DevOps & Platform Engineer',
      description: 'Tom Mendy’s portfolio. Epitech student and CKAD-certified engineer seeking a six-month DevOps or Platform Engineering internship in 2027.',
    },
    nav: { work: 'Projects', experience: 'Experience', skills: 'Skills', contact: 'Contact', language: 'Français' },
    hero: {
      eyebrow: 'DevOps / Platform Engineer · Bordeaux, France',
      title: 'I make deployments shorter and systems more predictable.',
      intro: 'I am a fifth-year Epitech student and a Certified Kubernetes Application Developer. I work on CI/CD pipelines, Kubernetes, infrastructure as code and observability, backed by two company placements and a homelab I operate every day.',
      availability: 'Final-year internship · 6 months · March to August 2027',
      contact: 'Contact me',
      cv: 'Download my CV',
      diagramLabel: 'Diagram showing a Git change passing through CI checks, Flux and Helm before reaching a three-node Kubernetes cluster.',
    },
    metrics: [
      { value: '< 3 min', label: 'to deploy, down from roughly 10 minutes' },
      { value: '5 min', label: 'for a Java workload that previously took about 30 minutes' },
      { value: '3 nodes', label: 'in my personal Kubernetes cluster' },
      { value: 'CKAD', label: 'certification valid through August 2028' },
    ],
    projects: {
      eyebrow: 'Selected work',
      title: 'Systems that actually run.',
      intro: 'The homelab is where I practise operations. Whanos taught me how to build a delivery system. Sumfleet puts me at the boundary between platform and product work.',
      source: 'View repository',
      read: 'Read the case study',
      items: [
        {
          name: 'Kubernetes homelab',
          eyebrow: 'Featured project · personal and public',
          description: 'A three-node cluster managed with Flux and Helm. I run ingress, secrets, PostgreSQL, shared NFS storage, observability and recovery procedures.',
          tags: ['Kubernetes', 'Flux', 'Helm', 'Infisical', 'CloudNativePG'],
          repository: 'https://github.com/Tom-Mendy/homelab',
          caseStudy: '/en/projects/homelab/',
        },
        {
          name: 'Whanos',
          eyebrow: 'Epitech project · 2024',
          description: 'A Jenkins platform that detects a repository’s technology, builds and publishes its Docker image, then deploys it to Kubernetes from a whanos.yml file.',
          tags: ['Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'],
          repository: 'https://github.com/Tom-Mendy/Whanos',
        },
        {
          name: 'Sumfleet',
          eyebrow: 'Final-year project · since 2025',
          description: 'Standardised development environments with Dev Containers, containerised Playwright E2E tests, and staging and production deployments with Docker Compose.',
          tags: ['Next.js', 'ElysiaJS', 'PostgreSQL', 'Playwright', 'Docker'],
        },
      ],
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Automate, measure, repeat.',
      items: [
        {
          company: 'Axians France',
          role: 'Part-time DevOps intern',
          period: 'Sep. 2026 to Feb. 2027',
          status: 'Confirmed placement',
          bullets: ['Joining the Service Integration team alongside my fifth year at Epitech.'],
        },
        {
          company: 'Axians France',
          role: 'Software engineering intern',
          period: 'Mar. to Aug. 2025',
          bullets: [
            'Migrated repositories and pipelines from Azure DevOps to GitLab CI/CD, adding SonarQube, Docker and Trivy.',
            'Automated Angular and Spring Boot deployments to Windows Server and Linux. Deployment time fell from about 10 minutes to under 3.',
            'Parallelised Java file processing with multithreading. A comparable workload fell from about 30 minutes to 5.',
          ],
        },
        {
          company: 'Belharra Numérique',
          role: 'DevOps intern',
          period: 'Jul. to Dec. 2023',
          bullets: [
            'Containerised Spring Boot applications and created a Helm chart for a Kubernetes proof of concept.',
            'Prepared Linux test servers and introduced JMeter tests, Prometheus, Grafana, Loki and Promtail.',
          ],
        },
      ],
    },
    skills: {
      eyebrow: 'Toolbox',
      title: 'Tools I use to ship and operate software.',
      groups: [
        { name: 'Containers and orchestration', items: ['Docker', 'Kubernetes', 'Helm', 'Traefik', 'NFS'] },
        { name: 'CI/CD and infrastructure', items: ['GitLab CI/CD', 'GitHub Actions', 'Jenkins', 'Terraform', 'Ansible'] },
        { name: 'Observability and security', items: ['Prometheus', 'Grafana', 'Loki', 'SonarQube', 'Trivy', 'Infisical'] },
        { name: 'Development and data', items: ['Bash', 'Python', 'Go', 'Java / Spring Boot', 'TypeScript', 'PostgreSQL'] },
      ],
    },
    profile: {
      certificationLabel: 'Certification',
      certificationTitle: 'Certified Kubernetes Application Developer',
      certificationDetail: 'Linux Foundation · earned August 2026 · valid through August 2028',
      educationLabel: 'Education',
      educationTitle: 'Epitech Bordeaux',
      educationDetail: 'Expert in Information Technology · EQF level 7 equivalent · 2022 to 2027',
      languageLabel: 'Languages',
      languageDetail: 'Native French · professional English B2',
    },
    contact: {
      eyebrow: 'March 2027',
      title: 'I am looking for a team that treats its platform as a product.',
      body: 'I am available for a six-month final-year internship from March to August 2027. Email is the quickest way to reach me.',
      email: 'Send an email',
      linkedin: 'View LinkedIn',
    },
    footer: 'Designed and built by Tom Mendy with Astro.',
  },
};
