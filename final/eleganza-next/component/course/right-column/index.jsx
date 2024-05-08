import React from 'react'
import styles from './right-column.module.scss'
import Card from '../card'
import Pagination from '../pagination'

export default function rightcolumn() {
  return (
    <>
      <div className={styles['right-column']}>
        <Card />
        <Pagination />
      </div>
    </>
  )
}
