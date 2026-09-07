import type { Locale } from './portfolio';

export function createProfilePageStructuredData(locale: Locale, description: string) {
  const pageUrl = locale === 'fr' ? 'https://tom-mendy.com/' : 'https://tom-mendy.com/en/';

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: pageUrl,
    inLanguage: locale,
    mainEntity: {
      '@id': 'https://tom-mendy.com/#tom-mendy',
      '@type': 'Person',
      name: 'Tom Mendy',
      url: 'https://tom-mendy.com/',
      jobTitle: locale === 'fr' ? 'Ingénieur DevOps et Platform Engineer' : 'DevOps and Platform Engineer',
      description,
      sameAs: [
        'https://github.com/Tom-Mendy',
        'https://linkedin.com/in/tom-mendy',
      ],
      knowsAbout: [
        'Kubernetes',
        'DevOps',
        'Platform Engineering',
        'CI/CD',
        'Infrastructure as Code',
        'Observability',
      ],
    },
  };
}
