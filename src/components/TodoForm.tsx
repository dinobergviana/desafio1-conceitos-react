import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'

import styles from './TodoForm.module.css'
import { ITodo } from './types'

interface ITodoFormProps {
  onAddNewTodo: (description: string) => void
}

export function TodoForm({onAddNewTodo}: ITodoFormProps) {
  const [todo, setTodo] = useState<ITodo>()
  const [todoDescription, setTodoDescription] = useState('')
  const [hasError, setHasError] = useState(false)

  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    setTodoDescription(event?.target.value)
  }

  function handleCreateNewTodo(event: FormEvent) {
    event.preventDefault()

    if(!todoDescription.trim()) {
      setHasError(true)
      return
    }

    onAddNewTodo(todoDescription)
    setHasError(false)
    setTodoDescription('')

  }

  return (
    <>
    <form className={styles.formContainer} onSubmit={handleCreateNewTodo}>
      <div className={styles.inputContainer}>
        <input onChange={handleNewTodoChange} value={todoDescription} name="description" type="text" placeholder="Adicione uma nova tarefa"/>
      </div>
      <div className={styles.btnSubmit}>
        <button type="submit">
          Criar
          <PlusCircle />
        </button>
      </div>
    </form>
    {
        hasError &&
        <div className={styles.errorMessage}>
          <span>Não é possivel criar um todo sem descrição</span>
        </div>
      }
    </>
  )
}