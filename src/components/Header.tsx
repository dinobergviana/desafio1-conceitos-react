import styles from './Header.module.css'

import todoAppLogo from '../assets/Logo.svg'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={todoAppLogo} alt="Logo Todo App" />
    </header>
  )
}