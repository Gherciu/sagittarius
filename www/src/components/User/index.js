import React from 'react';
import classnames from 'classnames';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function User({imageUrl, title, url}) {
  return (
    <div className={classnames('col col--4', styles.user)}>
      <a href={url} target="_blank" className={styles.user}>
        {imageUrl && (
          <div className="text--center">
            <img className={styles.userImage} src={imageUrl} alt={title} />
          </div>
        )}
        <h3>{title}</h3>
      </a>
    </div>
  );
}

export default User
