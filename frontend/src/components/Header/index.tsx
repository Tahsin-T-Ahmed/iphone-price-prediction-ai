import styles from "./Header.module.scss"

const Header = () => {
  return (
    <header className={styles.name}>
        <h1>iPhone4Cast AI</h1>
        <p>Predicting iPhone prices with Machine Learning</p>
    </header>
  )
}

export default Header