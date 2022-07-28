import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <TodoForm />
      </div>
    </div>
  )
}