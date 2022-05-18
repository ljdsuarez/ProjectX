import React from 'react';
import styles from './AboutContainer.module.css';

function AboutContainer(props) {
  return (
    <div className={styles.container}>{props.children}</div>
  )
}

export default AboutContainer