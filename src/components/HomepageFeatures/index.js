import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Install',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        The HollyHock installer is made to be easy to install and reduce device bricking as much as possible. 
        It will allow you to run both games and create your own app on your calculator !
      </>
    ),
    emoji: '😊'
  },
  {
    title: 'Growing community',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The classpad community brings people that enjoy thinkering and getting full usage of their hardware together.
        We're always into innovation and waiting for you to test latest releases or even brings your own expertise ! 
      </>
    ),
    emoji: '🌱'
  },
  {
    title: 'Hack into firmware',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Allows you to create custom solutions with a challenging and rewarding experience on reverse engineering. 
        It's also a great way to learn about electronics and embed system design !
      </>
    ),
    emoji: '🛠️'
  },
];

function Feature({Svg, title, description, emoji}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <p className={styles.bigEmoji}>{emoji}</p>
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <div class="buttons_src-pages-index-module">
            <a class="button button--secondary button--lg" href="/docs/intro">View more</a>
        </div>
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
