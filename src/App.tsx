import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'

import styles from './App.module.css'

import './global.css'

import clipboard from './assets/Clipboard.svg'

export function App() {
  const hasTodo = true
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
        {
          !hasTodo && 
          <div className={styles.alertContainer}>
            <div className={styles.alertImage}>
              <img src={clipboard} alt="Clipboard icon" />
            </div>
            <div className={styles.alertText}>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        }
      </div>
    </div>
  )
}