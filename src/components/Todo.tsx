import { Circle, Trash } from 'phosphor-react'

import styles from './Todo.module.css'

interface TodoProps {
  description: string
}

export function Todo({description}: TodoProps) {
  return (
    <div className={styles.todoContainer}>
      <button className={styles.checkIcon}>
        <Circle size={22}/>
      </button>
      <div className={styles.description}>
        <span>{description}</span>
      </div>
      <button className={styles.deleteIcon}>
        <Trash size={24}/>
      </button>
    </div>
  )
}