import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import DocusaurusImageUrl from '@site/static/img/jihadulakbar.png';


import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
      <img src={DocusaurusImageUrl} alt="Jihadul Akbar" style={{width: 300}}/>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <div className={styles.buttons}>
          <Link
            to="https://scholar.google.com/citations?user=iLr5dMcAAAAJ">
            <span className={styles.icon}>🌏︎</span>
          </Link>
          <Link
            to="https://sinta.kemdikbud.go.id/authors/profile/6890356">
            <span className={styles.icon}>🕮</span>
          </Link>
          <Link
            to="https://www.facebook.com/people/Jihadul-Akbar/pfbid02pSVhvKmsYz1DyFdyRJ6Gqr4whgtd9PgbbyBdjhnm5Q66Pd5g2CpCAmfBzKDCc5Jvl/">
            <span className={styles.icon}>🕮</span>
          </Link>
          <Link
            to="https://x.com/Jihadul4kbar">
            <span className={styles.icon}>x</span>
            </Link>
          <Link
            to="https://www.linkedin.com/in/jihadul-akbar-22553a105/">
            <span className={styles.icon}>🕮</span>
            </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
