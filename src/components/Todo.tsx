import { Trash } from 'phosphor-react'

import styles from './Todo.module.css'

import checkIcon from '../assets/check-bold.svg'

interface TodoProps {
  description: string
}

export function Todo({description}: TodoProps) {
  return (
    <div className={styles.todoContainer}>
      <div className={`${styles.checkIcon} ${styles.iconButtonchecked}`}>
        <img src={checkIcon} />
      </div>
      <div className={styles.description}>
        <span>{description}</span>
      </div>
      <button className={styles.deleteIcon}>
        <Trash size={24}/>
      </button>
    </div>
  )
}