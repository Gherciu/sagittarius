import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Feature from '../components/Feature'
import User from '../components/User'
import features from '../data/features'
import users from '../data/users'
import styles from './styles.module.css';

function Users() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <main>
        {users && users.length && (
          <section className={styles.users}>
            <div className="container">
              <div className="row">
                <div className="col col--12">
                  <h2 className="center">Who is Using This?</h2>
                </div>
                <div className="col col--12">
                  <p className="center">This project is used by all these packages</p>
                </div>
              </div>
              <div className="row mt-2">
                {users.map((props, idx) => (
                  <User key={idx} {...props} />
                ))}
              </div>
              <div className="row mt-4">
                <p className="center">Are you using this project?</p>
              </div>
              <div className="row mt-4 mb-2">
                <div className="center">
                  <a
                    className={classnames(
                      'button button--primary button--lg',
                      styles.getStarted,
                    )}
                    href={`https://github.com/${siteConfig.organizationName}/${siteConfig.title}/edit/master/www/src/data/users.js`}>
                    Add Your Company
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Users;
