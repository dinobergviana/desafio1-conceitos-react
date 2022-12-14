import { useState } from 'react'
import {v4 as uuid} from 'uuid'

import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'
import { Todo } from './components/Todo'

import { ITodo } from './components/types'

import clipboard from './assets/Clipboard.svg'

import styles from './App.module.css'
import './global.css'

export function App() {
  
  const [todos, setTodos] = useState<ITodo[]>([])
  const [totalTodosDone, setTotalTodosDone] = useState(0)

  const hasTodo = Boolean(todos.length)

  function addNewTodo(description: string) {
    const newTodo = {
      id: uuid(),
      description: description,
      isDone: false
    }
    
    setTodos(state =>[...state, newTodo])
  }

  function checkTodoAsDone(id: string) {
    todos.find(todo => {
      if(todo.id === id) {
        todo.isDone = !todo.isDone
      }
    })

    setTodos((state) => [...state])
    calculateDoneTodos()
  }

  function removeTodo(id: string) {
    const todoIndex = todos.findIndex(todo => todo.id === id)
    todos.splice(todoIndex, 1)
    setTodos((state) => [...state])
    calculateDoneTodos()
  }

  function calculateDoneTodos() {
    let total = 0
    
    todos.forEach(todo => {
      if(todo.isDone) {
        total += 1
      }
    })

    setTotalTodosDone(total)
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <TodoForm onAddNewTodo={addNewTodo} />
        {/* resumo dos todos */}
        <div className={styles.resumeContainer}>
          <div className={styles.created}>
            <strong>Tarefas criadas</strong>
            <span>{todos.length}</span>
          </div>
          <div className={styles.done}>
            <strong>Concluidas</strong>
            <span>{totalTodosDone}</span>
          </div>
        </div>
        {
          hasTodo && 
          <div>
            {
              todos.map(todo => {
                return (
                  <Todo todo={todo} key={todo.id} onCheckTodoAsDone={checkTodoAsDone} onRemoveTodo={removeTodo}/>
                )
              })
            }
          </div>          
        }
        {
          !hasTodo && 
          <div className={styles.alertContainer}>
            <div className={styles.alertImage}>
              <img src={clipboard} alt="Clipboard icon" />
            </div>
            <div className={styles.alertText}>
              <strong>Voc?? ainda n??o tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        }
      </div>
    </div>
  )
}