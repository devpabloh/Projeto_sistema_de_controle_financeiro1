import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.container}>
        <header className={styles.header}>
            <h1 className={styles.title}>Controle Financeiro</h1>
        </header>
    </div>
  )
}

export default Header