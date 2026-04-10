import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURED_TITLES = [
  {
    number: 'Title I',
    slug: 'title-1-governance-act-2025',
    title: 'Governance Act 2025',
    desc: 'Establishes the structure and authority of the governing bodies of the Constitutional Monarchy of Links Land.',
  },
  {
    number: 'Title III',
    slug: 'title-3-law-enforcement-and-public-safety-act-2025-leps',
    title: 'Law Enforcement & Public Safety Act 2025',
    desc: 'Governs the conduct, powers, and duties of law enforcement agencies across the realm.',
  },
  {
    number: 'Title VII',
    slug: 'title-7-civic-rights-and-responsibilities-act-2025-crr',
    title: 'Civic Rights & Responsibilities Act 2025',
    desc: 'Defines the fundamental rights and civic responsibilities of all citizens of Links Land.',
  },
  {
    number: 'Title X',
    slug: 'title-10-public-disorder-act-2025',
    title: 'Public Disorder Act 2025',
    desc: 'Sets out provisions for maintaining public order and the powers available to authorities.',
  },
  {
    number: 'Title XVIII',
    slug: 'title-18-unity-and-equality-act-2025',
    title: 'Unity & Equality Act 2025',
    desc: 'Protects the rights of all persons to equal treatment under the law of Links Land.',
  },
  {
    number: 'Title XXXIV',
    slug: 'title-34-electoral-integrity-and-democracy-act-2025-eid',
    title: 'Electoral Integrity & Democracy Act 2025',
    desc: 'Ensures the integrity of elections and the democratic processes of the realm.',
  },
];

const STATS = [
  { value: '34', label: 'Legislative Titles' },
  { value: '1', label: 'Constitution' },
  { value: '2025', label: 'Year of Enactment' },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <div className={styles.hero}>
      <Heading as="h2" className={styles.heroHeading}>
        Official Legislative Repository
      </Heading>
      <p>
        Welcome to the official legislative repository of the{' '}
        <strong>Constitutional Monarchy of Links Land</strong>. This site contains
        the complete and authoritative text of all enacted legislation, acts of
        the realm, and the founding Constitution.
      </p>
      <div className={styles.heroStats}>
        {STATS.map(({ value, label }) => (
          <div key={label} className={styles.statItem}>
            <span className={styles.statValue}>{value}</span>
            <span className={styles.statLabel}>{label}</span>
          </div>
        ))}
      </div>
      <div className={styles.heroCta}>
        <Link className={styles.btnPrimary} to="/docs/constitution">
          Read the Constitution
        </Link>
        <Link className={styles.btnSecondary} to="/docs">
          Browse All Legislation
        </Link>
      </div>
    </div>
  );
}

// ─── Title Cards ──────────────────────────────────────────────────────────────

function FeaturedTitles() {
  return (
    <section className={styles.section}>
      <Heading as="h2" className={styles.sectionHeading}>
        Featured Legislation
      </Heading>
      <div className={styles.cardContainer}>
        {FEATURED_TITLES.map((t) => (
          <Link key={t.number} to={`/docs/${t.slug}`} className={styles.card}>
            <div className={styles.cardNumber}>{t.number}</div>
            <h3 className={styles.cardTitle}>{t.title}</h3>
            <p className={styles.cardDesc}>{t.desc}</p>
            <span className={styles.cardLink}>View Act →</span>
          </Link>
        ))}
      </div>
      <div className={styles.viewAll}>
        <Link to="/docs" className={styles.btnPrimary}>
          View All 34 Titles
        </Link>
      </div>
    </section>
  );
}

// ─── Constitution Panel ───────────────────────────────────────────────────────

function ConstitutionPanel() {
  return (
    <section className={styles.section}>
      <div className={styles.constitutionPanel}>
        <div className={styles.constitutionPanelBar} />
        <div className={styles.constitutionPanelBody}>
          <Heading as="h2" className={styles.constitutionHeading}>
            The Constitution of Links Land
          </Heading>
          <p className={styles.constitutionDesc}>
            The supreme law of the Constitutional Monarchy of Links Land. All legislation
            enacted by the realm is subordinate to and must be consistent with the
            provisions of the Constitution. The Constitution establishes the monarchy,
            the structure of government, and the fundamental rights of all citizens.
          </p>
          <Link to="/docs/constitution" className={styles.btnPrimary}>
            Read the Constitution
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Notice Banner ────────────────────────────────────────────────────────────

function NoticeBanner() {
  return (
    <div className={styles.noticeBanner}>
      <div className={styles.noticeInner}>
        <strong>Notice:</strong> This legislative repository (legislation.govll.org) is not
        yet publicly launched. For the main government portal of the Constitutional Monarchy
        of Links Land, please visit{' '}
        <a href="https://govll.org" target="_blank" rel="noopener noreferrer">
          govll.org
        </a>
        .
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home(): ReactNode {
  return (
    <Layout
      title="Legislative Repository — Constitutional Monarchy of Links Land"
      description="The official legislative repository of the Constitutional Monarchy of Links Land. Browse the Constitution and all 34 legislative titles."
    >
      {/* <NoticeBanner /> */}
      <main className={styles.main}>
        <div className="container">
          <div className={styles.pageHeader}>
            <Heading as="h1" className={styles.pageTitle}>
              Legislative Repository
            </Heading>
            <p className={styles.effectiveDate}>
              Constitutional Monarchy of Links Land — All Acts as of 2025
            </p>
          </div>
          <Hero />
          <FeaturedTitles />
          <ConstitutionPanel />
        </div>
      </main>
    </Layout>
  );
}