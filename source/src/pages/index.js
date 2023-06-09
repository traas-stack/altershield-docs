import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Typewriter from '../components/Typewriter';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.mainContent}>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle"><Typewriter text={siteConfig.tagline}></Typewriter></p>
        <div className={styles.buttonRow}>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/introduction/community">
              Join Us
            </Link>
            <div className={styles.divSpace}></div>
            <Link
              className="button button--secondary button--lg"
              to="/docs/introduction/what-is-altershield">
              Documents
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
