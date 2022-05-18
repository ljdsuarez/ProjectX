import React from 'react'
import styles from './SolutionsContainer.module.css'

function SolutionsContainer(props) {
  return (
    <div className={styles.container}>{props.children}</div>
  )
}

export default SolutionsContainer