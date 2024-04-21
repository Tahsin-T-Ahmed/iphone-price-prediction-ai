import "@/app/globals.scss"
import styles from "./Form.module.scss"

const Form = () => {
  return (
    <section className={"glassmorph"}>
        <ul>
            <li>
                <label>Year:</label>
                <input type="number" />
            </li>
            <li>
                <label>Special Edition:</label>
                <p className={styles.detail}>S, Pro, etc</p>
                <input type="number" />
            </li>
        </ul>
    </section>
  )
}

export default Form