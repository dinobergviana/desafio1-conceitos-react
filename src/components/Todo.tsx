import { Circle, Trash } from 'phosphor-react'

import styles from './Todo.module.css'

interface TodoProps {
  description: string
}

export function Todo({description}: TodoProps) {
  return (
    <div className={styles.todoContainer}>
      <div className={styles.checkIcon}>
        <Circle size={20}/>
      </div>
      <div className={styles.description}>
        <span>{description}</span>
      </div>
      <div className={styles.deleteIcon}>
        <Trash size={20}/>
      </div>
    </div>
  )
}