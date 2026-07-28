import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';

import {useLocale, useTranslation, type Locale} from '../i18n/useTranslation';
import {solutionShell} from '../i18n/content/solutionShell';
import styles from './SolutionPage.module.css';

const SALES_EMAIL = 'sales@tictactrip.eu';
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

export type SolutionFaq = {
  q: string;
  a: string;
};

export type SolutionBenefit = {
  icon: string;
  title: string;
  description: string;
};

export type SolutionPageProps = {
  slug: string;
  eyebrow: string;
  title: string;
  metaTitle: string;
  description: string;
  metaDescription: string;
  keywords: string;
  heroTitle: React.ReactNode;
  heroLead: string;
  intro: React.ReactNode;
  benefits: SolutionBenefit[];
  capabilities: string[];
  code: {
    filename: string;
    body: string;
  };
  faqs: SolutionFaq[];
  serviceType: string;
  audienceType: string;
  related: Array<{title: string; slug: string}>;
  breadcrumbCategory?: string;
  breadcrumbCategoryHref?: string;
  benefitsHeading?: string;
  relatedHeading?: string;
};

export default function SolutionPage(props: SolutionPageProps): JSX.Element {
  const locale = useLocale();
  const shell = useTranslation(solutionShell);
  const localePrefix = locale === 'en' ? '' : `/${locale}`;
  const canonical = `${SITE_URL}${localePrefix}${props.slug}`;
  const breadcrumbCategory = props.breadcrumbCategory ?? 'Solutions';
  const breadcrumbCategoryHref = props.breadcrumbCategoryHref ?? '/#use-cases';
  const benefitsHeading =
    props.benefitsHeading ?? `Why Tictactrip for ${props.title.toLowerCase()}`;
  const relatedHeading = props.relatedHeading ?? 'Other Tictactrip solutions';

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Tictactrip',
        item: `${SITE_URL}${localePrefix}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: breadcrumbCategory,
        item: `${SITE_URL}${localePrefix}${breadcrumbCategoryHref}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: props.title,
        item: canonical,
      },
    ],
  };

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: props.serviceType,
    provider: {
      '@type': 'Organization',
      name: 'Tictactrip',
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/img/logoTextBlack.svg`,
    },
    name: props.metaTitle,
    description: props.metaDescription,
    areaServed: {
      '@type': 'Place',
      name: 'Europe',
    },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: props.audienceType,
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: canonical,
    },
  };

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: props.metaTitle,
    description: props.metaDescription,
    url: canonical,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Tictactrip Documentation',
      url: `${SITE_URL}/`,
    },
    inLanguage: SCHEMA_LANG[locale],
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/img/logoTextBlack.svg`,
    },
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: props.faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {'@type': 'Answer', text: item.a},
    })),
  };

  return (
    <Layout title={props.metaTitle} description={props.metaDescription}>
      <Head>
        <link rel="canonical" href={canonical} />
        {HREFLANG_LOCALES.map((l) => (
          <link
            key={l}
            rel="alternate"
            hrefLang={HREFLANG[l]}
            href={localizedUrl(l, props.slug)}
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href={localizedUrl('en', props.slug)} />
        <meta name="description" content={props.metaDescription} />
        <meta name="keywords" content={props.keywords} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.metaTitle} />
        <meta property="og:description" content={props.metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content="Tictactrip Documentation" />
        <meta property="og:locale" content={OG_LOCALE[locale]} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={props.metaTitle} />
        <meta name="twitter:description" content={props.metaDescription} />
        <script type="application/ld+json">{JSON.stringify(webpage)}</script>
        <script type="application/ld+json">{JSON.stringify(service)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Head>

      <main className={styles.main}>
        <nav className={styles.breadcrumb} aria-label={shell.breadcrumbAriaLabel}>
          <div className="container">
            <ol>
              <li>
                <Link to="/">Tictactrip</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to={breadcrumbCategoryHref}>{breadcrumbCategory}</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{props.title}</li>
            </ol>
          </div>
        </nav>

        <header className={styles.hero}>
          <div className="container">
            <span className={styles.eyebrow}>{props.eyebrow}</span>
            <h1 className={styles.heroTitle}>{props.heroTitle}</h1>
            <p className={styles.heroLead}>{props.heroLead}</p>
            <div className={styles.heroCtas}>
              <Link className={clsx('button button--lg', styles.btnPrimary)} to="/docs/intro">
                {shell.heroPrimaryCta}
              </Link>
              <a
                className={clsx('button button--lg', styles.btnSecondary)}
                href={`mailto:${SALES_EMAIL}?subject=Tictactrip%20API%20-%20${encodeURIComponent(props.title)}`}>
                {shell.heroSecondaryCta}
              </a>
            </div>
          </div>
        </header>

        <section className={clsx(styles.section, styles.sectionLight)}>
          <div className="container">
            <div className={styles.introGrid}>
              <div className={styles.introCopy}>{props.intro}</div>
              <ul className={styles.bulletList}>
                {props.capabilities.map((cap) => (
                  <li key={cap}>{cap}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.sectionAlt)}>
          <div className="container">
            <h2 className={styles.sectionTitle}>{benefitsHeading}</h2>
            <p className={styles.sectionSubtitle}>{shell.benefitsSubtitle}</p>
            <div className={styles.benefitGrid}>
              {props.benefits.map((b) => (
                <article key={b.title} className={styles.benefitCard}>
                  <div className={styles.benefitIcon} aria-hidden="true">{b.icon}</div>
                  <h3 className={styles.benefitTitle}>{b.title}</h3>
                  <p className={styles.benefitDescription}>{b.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.sectionLight)}>
          <div className="container">
            <div className={styles.codeGrid}>
              <div>
                <span className={styles.kicker}>{shell.integrationKicker}</span>
                <h2 className={styles.sectionTitle}>{shell.integrationHeading}</h2>
                <p className={styles.lead}>{shell.integrationCopy}</p>
                <div className={styles.heroCtas}>
                  <Link className={clsx('button button--lg', styles.btnPrimary)} to="/docs/intro">
                    {shell.startTutorialCta}
                  </Link>
                  <Link className={clsx('button button--lg', styles.btnGhost)} to="/api">
                    {shell.apiReferenceCta}
                  </Link>
                </div>
              </div>
              <div className={styles.codeBlock} aria-label="Example API request">
                <div className={styles.codeHeader}>
                  <span className={styles.codeDot} />
                  <span className={styles.codeDot} />
                  <span className={styles.codeDot} />
                  <span className={styles.codeFile}>{props.code.filename}</span>
                </div>
                <pre className={styles.codePre}>{props.code.body}</pre>
              </div>
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.sectionAlt)} id="faq">
          <div className="container">
            <h2 className={styles.sectionTitle}>{shell.faqHeading}</h2>
            <p className={styles.sectionSubtitle}>{shell.faqSubtitle}</p>
            <div className={styles.faqList}>
              {props.faqs.map((item) => (
                <details key={item.q} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{item.q}</summary>
                  <p className={styles.faqAnswer}>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {props.related.length > 0 && (
          <section className={clsx(styles.section, styles.sectionLight)}>
            <div className="container">
              <h2 className={styles.sectionTitle}>{relatedHeading}</h2>
              <div className={styles.relatedGrid}>
                {props.related.map((r) => (
                  <Link key={r.slug} to={r.slug} className={styles.relatedCard}>
                    <span className={styles.relatedTitle}>{r.title}</span>
                    <span className={styles.relatedArrow} aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className={clsx(styles.section, styles.sectionCta)}>
          <div className="container">
            <h2 className={styles.ctaTitle}>{shell.ctaHeading}</h2>
            <p className={styles.ctaLead}>{shell.ctaLead}</p>
            <div className={styles.heroCtas}>
              <a
                className={clsx('button button--lg', styles.btnPrimary)}
                href={`mailto:${SALES_EMAIL}?subject=Tictactrip%20API%20-%20${encodeURIComponent(props.title)}`}>
                {shell.contactSalesCta}
              </a>
              <Link className={clsx('button button--lg', styles.btnSecondary)} to="/">
                {shell.backToHomeCta}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
