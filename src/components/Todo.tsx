import { Trash } from 'phosphor-react'

import styles from './Todo.module.css'

import checkIcon from '../assets/check-bold.svg'
import { useState } from 'react';

interface TodoProps {
  description: string;
}

export function Todo({description}: TodoProps) {
  const [isTodoDone, setIsTodoDoneDone] = useState(false);

  function checkTodoAsDone(todo: string): void {
    setIsTodoDoneDone(!isTodoDone)

  }
  return (
    <div className={styles.todoContainer}>
      <div
        onClick={() => checkTodoAsDone(description)} 
        className={`${styles.checkIcon} ${isTodoDone ? styles.iconButtonchecked : ''}`}>
        {
          isTodoDone &&
          <img src={checkIcon} />
        }
      </div>
      <div className={`${styles.description} ${isTodoDone ? styles.descriptionDone : ''}`}>
        <span>{description}</span>
      </div>
      <button className={styles.deleteIcon}>
        <Trash size={24}/>
      </button>
    </div>
  )
}