import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'

import styles from './TodoForm.module.css'

interface ITodoFormProps {
  onAddNewTodo: (todo: string) => void
}

export function TodoForm({onAddNewTodo}: ITodoFormProps) {
  const [todo, setTodo] = useState('')
  const [newTodo, setNewTodo] = useState('')

  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTodo(event?.target.value)
  }

  function handleCreateNewTodo(event: FormEvent) {
    event.preventDefault()
    onAddNewTodo(newTodo)
    setNewTodo('')
  }

  return (
    <form className={styles.formContainer} onSubmit={handleCreateNewTodo}>
      <div className={styles.inputContainer}>
        <input onChange={handleNewTodoChange} value={newTodo} name="description" type="text" placeholder="Adicione uma nova tarefa"/>
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