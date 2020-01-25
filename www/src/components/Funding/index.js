import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';

function funding({imageUrl, imgType, url}) {
  return (
    <div className={classnames('col col--4', styles.funding)}>
      <a href={url} target="_blank" className={styles.funding}>
        <div className="text--center">
          <img className={imgType === 'long' ? styles.fundingImageLong : styles.fundingImage} src={imageUrl} alt='funding' />
        </div>
      </a>
    </div>
  );
}

export default funding
