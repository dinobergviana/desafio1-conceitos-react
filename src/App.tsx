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
        {/* resumo dos todos */}
        <div className={styles.resumeContainer}>
          <div className={styles.created}>
            <strong>Tarefas criadas</strong>
            <span>0</span>
          </div>
          <div className={styles.done}>
            <strong>Concluidas</strong>
            <span>0</span>
          </div>
        </div>
        {/* componente de alert quando não houver todos criados */}
      </div>
    </div>
  )
}