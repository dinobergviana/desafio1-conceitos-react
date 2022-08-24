import { Trash } from 'phosphor-react'

import styles from './Todo.module.css'

import checkIcon from '../assets/check-bold.svg'
import { useState } from 'react';
import { ITodo } from './types';

interface TodoProps {
  todo: ITodo;
  onCheckTodoAsDone: (id: string) => void;
  onRemoveTodo: (id: string) => void;
}

export function Todo({todo, onCheckTodoAsDone, onRemoveTodo}: TodoProps) {
  const [isTodoDone, setIsTodoDoneDone] = useState(false);

  function handleCheckTodoAsDone(id: string) {
    setIsTodoDoneDone(!isTodoDone)
    onCheckTodoAsDone(id)
  }

  function handleRemoveTodo(id: string) {
    onRemoveTodo(id)
  }

  return (
    <div className={styles.todoContainer}>
      <div
        onClick={() => handleCheckTodoAsDone(todo.id)} 
        className={`${styles.checkIcon} ${isTodoDone ? styles.iconButtonchecked : ''}`}>
        {
          isTodoDone &&
          <img src={checkIcon} />
        }
      </div>
      <div className={`${styles.description} ${isTodoDone ? styles.descriptionDone : ''}`}>
        <span>{todo.description}</span>
      </div>
      <button className={styles.deleteIcon} onClick={() => handleRemoveTodo(todo.id)}>
        <Trash size={24}/>
      </button>
    </div>
  )
}