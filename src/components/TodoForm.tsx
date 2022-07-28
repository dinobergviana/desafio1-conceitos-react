import { PlusCircle } from 'phosphor-react'

import styles from './TodoForm.module.css'

export function TodoForm() {
  return (
    <form className={styles.formContainer}>
      <div className={styles.inputContainer}>
        <input type="text" placeholder="Adicione uma nova tarefa"/>
      </div>
      <div className={styles.btnSubmit}>
        <button type="submit">
          Criar
          <PlusCircle />
        </button>
      </div>
    </form>
  )
}