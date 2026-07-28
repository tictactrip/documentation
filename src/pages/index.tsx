import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';

import {useLocale, useTranslation, type Locale} from '../i18n/useTranslation';
import {homepage} from '../i18n/content/homepage';
import styles from './index.module.css';

const SALES_EMAIL = 'sales@tictactrip.eu';
const DEV_EMAIL = 'dev@tictactrip.eu';
const SITE_URL = 'https://developers.tictactrip.eu';

const OG_LOCALE: Record<Locale, string> = {
  en: 'en_US',
  fr: 'fr_FR',
  de: 'de_DE',
  es: 'es_ES',
  it: 'it_IT',
  pt: 'pt_PT',
  ru: 'ru_RU',
};

const SCHEMA_LANG: Record<Locale, string> = {
  en: 'en',
  fr: 'fr',
  de: 'de',
  es: 'es',
  it: 'it',
  pt: 'pt',
  ru: 'ru',
};

// hreflang annotations emitted in the page <head>, mirroring the sitemap.
// Declaring the localized alternates in-page (not only in the sitemap) lets
// Google consolidate the per-locale duplicates onto their proper canonical —
// the "Alternate page with proper canonical tag" relationship.
const HREFLANG: Record<Locale, string> = {
  en: 'en-US',
  fr: 'fr-FR',
  de: 'de-DE',
  es: 'es-ES',
  it: 'it-IT',
  pt: 'pt-PT',
  ru: 'ru-RU',
};

const HREFLANG_LOCALES = Object.keys(HREFLANG) as Locale[];

// Build the absolute URL for a given locale + site-relative path.
function localizedUrl(locale: Locale, urlPath: string): string {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  return `${SITE_URL}${prefix}${urlPath}`;
}

const FEATURE_SLUGS = [
  '/features/multimodal-coverage',
  '/features/eco-responsible',
  '/features/real-time-availability',
  '/features/smart-combinations',
  '/features/end-to-end-booking',
  '/features/developer-first',
];

const USE_CASE_SLUGS = [
  '/solutions/online-travel-agencies',
  '/solutions/corporate-travel-tmc',
  '/solutions/fintech-super-apps',
  '/solutions/mobility-maas',
  '/solutions/green-tech-sustainability',
  '/solutions/custom-internal-tools',
];

function HomepageHeader() {
  const t = useTranslation(homepage);
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroOverlay} />
      <div className={clsx('container', styles.heroContent)}>
        <span className={styles.heroEyebrow}>{t.hero.eyebrow}</span>
        <h1 className={styles.heroTitle}>
          {t.hero.titlePre}
          <span className={styles.heroAccent}>{t.hero.titleAccent}</span>
          {t.hero.titlePost}
        </h1>
        <p className={styles.heroSubtitle}>{t.hero.subtitle}</p>
        <div className={styles.heroButtons}>
          <Link className={clsx('button button--lg', styles.btnPrimary)} to="/docs/intro">
            {t.hero.primaryCta}
          </Link>
          <Link
            className={clsx('button button--lg', styles.btnSecondary)}
            to={`mailto:${SALES_EMAIL}?subject=Tictactrip%20API%20access%20request`}>
            {t.hero.secondaryCta}
          </Link>
        </div>
        <p className={styles.heroNote}>
          {t.hero.notePre}
          <a href={`mailto:${SALES_EMAIL}`} className={styles.heroLink}>
            {SALES_EMAIL}
          </a>
          {t.hero.notePost}
        </p>
        <div className={styles.heroStats}>
          {t.hero.stats.map((s) => (
            <div key={s.label} className={styles.heroStat}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.scrollHint} aria-hidden="true">
        <span />
      </div>
    </header>
  );
}

function IntroSection() {
  const t = useTranslation(homepage);
  return (
    <section className={clsx(styles.section, styles.sectionLight)}>
      <div className="container">
        <div className={styles.introGrid}>
          <div>
            <h2 className={styles.sectionTitle}>{t.intro.h2}</h2>
            <div className={styles.introCopy}>{t.intro.intro}</div>
          </div>
          <ul className={styles.bulletList}>
            {t.intro.bullets.map((b) => (
              <li key={b.label}>
                <strong>{b.label}</strong> — {b.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const t = useTranslation(homepage);
  return (
    <section className={clsx(styles.section, styles.sectionAlt)} id="features">
      <div className="container">
        <h2 className={styles.sectionTitle}>{t.features.h2}</h2>
        <p className={styles.sectionSubtitle}>{t.features.subtitle}</p>
        <div className={styles.featureGrid}>
          {t.features.cards.map((f, i) => (
            <Link
              key={f.title}
              to={FEATURE_SLUGS[i]}
              className={styles.featureCard}
              style={{animationDelay: `${i * 80}ms`}}>
              <div className={styles.featureIcon} aria-hidden="true">{f.icon}</div>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDescription}>{f.description}</p>
              <span className={styles.featureLink}>{t.features.learnMore}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickStartSection() {
  const t = useTranslation(homepage);
  return (
    <section className={clsx(styles.section, styles.sectionLight)}>
      <div className="container">
        <div className={styles.quickStartGrid}>
          <div>
            <span className={styles.kicker}>{t.quickStart.kicker}</span>
            <h2 className={styles.sectionTitle}>{t.quickStart.h2}</h2>
            <p className={styles.lead}>{t.quickStart.lead}</p>
            <ol className={styles.numberedList}>
              {t.quickStart.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
            <div className={styles.quickStartCtas}>
              <Link className={clsx('button button--lg', styles.btnPrimary)} to="/docs/intro">
                {t.quickStart.primaryCta}
              </Link>
              <Link className={clsx('button button--lg', styles.btnGhost)} to="/api">
                {t.quickStart.secondaryCta}
              </Link>
            </div>
          </div>
          <div className={styles.codeBlock} aria-label="Example API request">
            <div className={styles.codeHeader}>
              <span className={styles.codeDot} />
              <span className={styles.codeDot} />
              <span className={styles.codeDot} />
              <span className={styles.codeFile}>search.sh</span>
            </div>
            <pre className={styles.codePre}>
{`# Search Paris → Lyon, tomorrow
curl -X POST 'https://api.tictactrip.eu/v2/results' \\
  -H 'Authorization: Bearer YOUR_TOKEN' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "originGpuid":      "c|FRpari____@u09tu",
    "destinationGpuid": "c|FRlyon____@u05kq",
    "outboundDate":     "2026-05-13T00:00:00Z",
    "passengers":       [{"age": 30}]
  }'

# → returns itinerary bundles with price, duration
#   and CO₂ emissions per passenger`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  const t = useTranslation(homepage);
  return (
    <section className={clsx(styles.section, styles.sectionAlt)} id="use-cases">
      <div className="container">
        <h2 className={styles.sectionTitle}>{t.useCases.h2}</h2>
        <p className={styles.sectionSubtitle}>{t.useCases.subtitle}</p>
        <div className={styles.useCaseGrid}>
          {t.useCases.cards.map((u, i) => (
            <Link key={u.title} to={USE_CASE_SLUGS[i]} className={styles.useCaseCard}>
              <h3 className={styles.useCaseTitle}>{u.title}</h3>
              <p className={styles.useCaseDescription}>{u.description}</p>
              <span className={styles.useCaseLink}>{t.useCases.learnMore}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function AccessSection() {
  const t = useTranslation(homepage);
  return (
    <section className={clsx(styles.section, styles.sectionAccess)}>
      <div className="container">
        <div className={styles.accessCard}>
          <span className={styles.kicker}>{t.access.kicker}</span>
          <h2 className={styles.accessTitle}>{t.access.h2}</h2>
          <p className={styles.accessLead}>{t.access.lead}</p>
          <div className={styles.accessActions}>
            <a
              className={clsx('button button--lg', styles.btnPrimary)}
              href={`mailto:${SALES_EMAIL}?subject=Tictactrip%20API%20access%20request`}>
              {t.access.primaryCta}
            </a>
            <a
              className={clsx('button button--lg', styles.btnGhost)}
              href={`mailto:${DEV_EMAIL}?subject=Tictactrip%20API%20technical%20question`}>
              {t.access.secondaryCta} {DEV_EMAIL}
            </a>
          </div>
          <p className={styles.accessFinePrint}>{t.access.finePrint}</p>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const t = useTranslation(homepage);
  return (
    <section className={clsx(styles.section, styles.sectionLight)} id="faq">
      <div className="container">
        <h2 className={styles.sectionTitle}>{t.faq.h2}</h2>
        <p className={styles.sectionSubtitle}>{t.faq.subtitle}</p>
        <div className={styles.faqList}>
          {t.faq.items.map((item) => (
            <details key={item.q} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>{item.q}</summary>
              <p className={styles.faqAnswer}>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  const t = useTranslation(homepage);
  return (
    <section className={clsx(styles.section, styles.sectionFinalCta)}>
      <div className="container">
        <h2 className={styles.finalCtaTitle}>{t.finalCta.h2}</h2>
        <p className={styles.finalCtaLead}>{t.finalCta.lead}</p>
        <div className={styles.heroButtons}>
          <Link className={clsx('button button--lg', styles.btnPrimary)} to="/docs/intro">
            {t.finalCta.primaryCta}
          </Link>
          <a
            className={clsx('button button--lg', styles.btnSecondary)}
            href={`mailto:${SALES_EMAIL}?subject=Tictactrip%20API%20access%20request`}>
            {t.finalCta.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}

function StructuredData() {
  const locale = useLocale();
  const t = useTranslation(homepage);
  const canonical = localizedUrl(locale, '/');

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tictactrip',
    url: 'https://www.tictactrip.eu/',
    logo: `${SITE_URL}/img/logoTextBlack.svg`,
    sameAs: ['https://www.tictactrip.eu/', 'https://github.com/tictactrip'],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: SALES_EMAIL,
        contactType: 'sales',
        areaServed: 'EU',
        availableLanguage: ['English', 'French', 'German', 'Spanish', 'Italian', 'Portuguese', 'Russian'],
      },
      {
        '@type': 'ContactPoint',
        email: DEV_EMAIL,
        contactType: 'technical support',
        areaServed: 'EU',
        availableLanguage: ['English', 'French', 'German', 'Spanish', 'Italian', 'Portuguese', 'Russian'],
      },
    ],
  };

  const product = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Tictactrip API',
    description: t.meta.description,
    brand: {'@type': 'Brand', name: 'Tictactrip'},
    category: 'Travel API / Transport API',
    audience: {
      '@type': 'BusinessAudience',
      audienceType:
        'Online travel agencies, corporate travel platforms, fintech apps, mobility and MaaS platforms, sustainability tools',
    },
  };

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t.meta.title,
    description: t.meta.description,
    url: canonical,
    inLanguage: SCHEMA_LANG[locale],
    isPartOf: {
      '@type': 'WebSite',
      name: 'Tictactrip Documentation',
      url: `${SITE_URL}/`,
    },
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <Head>
      <link rel="canonical" href={canonical} />
      {HREFLANG_LOCALES.map((l) => (
        <link
          key={l}
          rel="alternate"
          hrefLang={HREFLANG[l]}
          href={localizedUrl(l, '/')}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={localizedUrl('en', '/')} />
      <meta name="description" content={t.meta.description} />
      <meta name="keywords" content={t.meta.keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={t.meta.ogTitle} />
      <meta property="og:description" content={t.meta.ogDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={OG_LOCALE[locale]} />
      <meta property="og:site_name" content="Tictactrip Documentation" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t.meta.ogTitle} />
      <meta name="twitter:description" content={t.meta.ogDescription} />
      <script type="application/ld+json">{JSON.stringify(webpage)}</script>
      <script type="application/ld+json">{JSON.stringify(organization)}</script>
      <script type="application/ld+json">{JSON.stringify(product)}</script>
      <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
    </Head>
  );
}

export default function Home(): JSX.Element {
  const t = useTranslation(homepage);
  return (
    <Layout title={t.meta.title} description={t.meta.description}>
      <StructuredData />
      <main className={styles.main}>
        <HomepageHeader />
        <IntroSection />
        <FeaturesSection />
        <QuickStartSection />
        <UseCasesSection />
        <AccessSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
    </Layout>
  );
}
