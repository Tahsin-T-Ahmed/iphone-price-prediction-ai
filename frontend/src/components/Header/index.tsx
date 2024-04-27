import styles from "./Header.module.scss"
import { BsApple } from "react-icons/bs";

const Header = () => {
  return (
    <header className={styles.name} style={{
      marginBottom: "2rem"
    }}>
      <h1><BsApple className={styles.logo}/>iPhone4Cast AI</h1>
      <p>Predicting iPhone prices with Machine Learning</p>
    </header>
  )
}

export default Header