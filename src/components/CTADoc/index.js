import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function CTADocs() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <p class="hero__subtitle">There's a lot more to discover !</p>
        <div class="buttons_src-pages-index-module">
            <a class="button button--primary button--lg" href="/docs/intro">Get started</a>
        </div>
      </div>
    </section>
  );
}
