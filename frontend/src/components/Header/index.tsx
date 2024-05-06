import styles from "./styles.module.scss"
import { ReactComponent as BsApple } from "./icon.svg";

const Header = () => {
  return (
    <header className={styles.name} >
      <h1><BsApple className={styles.logo}/>iPhone4Cast AI</h1>
      <p>Predicting iPhone prices with Machine Learning</p>
    </header>
  )
}

export default Header