import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate from '@docusaurus/Translate';


const FeatureList = [
  {
    title: (<Translate>OCMS</Translate>),
    imageSrc: require('../../static/img/action-one.png').default,
    description: (
      <Translate description="homepage slogan-one" id="homepage slogan-one">
         The Open Change Management Specification is a protocol for change information technology that unifies various change information standards.
      </Translate>
    ),
  },
  {
    title: (<Translate>Risk Defense</Translate>),
    imageSrc: require('../../static/img/action-two.png').default,
    description: (
      <Translate description="homepage slogan-two" id="homepage slogan-two">
        An open and extensible change defense framework, which uses intelligent algorithms such as time series and log text anomaly detection to effectively identify anomalies during changes.
      </Translate>
    ),
  },
  {
    title: (<Translate>Cloud Native</Translate>),
    imageSrc: require('../../static/img/action-three.png').default,
    description: (
      <Translate description="homepage slogan-three" id="homepage slogan-three">
        Within the Kubernetes ecosystem, it integrates with native Deployments to provide risk prevention, blocking, and rollback capabilities during changes.
      </Translate>
    ),
  },
];

function Feature({imageSrc, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imageSrc} className={styles.featureImage} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
