import "@/app/globals.scss"
import styles from "./Form.module.scss"

const Form = () => {
  return (
    <form className={"glassmorph " + styles.form}>
        <ul>
            <li>
                <label>Year:</label>
                <input type="number" />
            </li>
            <li>
                <label>Special Edition</label>
                <p className={styles.detail}>S, Pro, etc</p>
                <input type="checkbox" />
            </li>
            <li>
                <label>Large Size</label>
                <p className={styles.detail}>Plus, Max, etc</p>
                <input type="checkbox" />
            </li>
        </ul>
        <ul>
            <li>
                <input type="radio" id="GB32"/>
                <label htmlFor="GB32">32 GB</label>

                <input type="radio" id="GB64"/>
                <label htmlFor="GB64">64 GB</label>

                <input type="radio" id="GB128"/>
                <label htmlFor="GB128">128 GB</label>

                <input type="radio" id="GB256"/>
                <label htmlFor="GB256">256 GB</label>
                
                <input type="radio" id="GB512"/>
                <label htmlFor="GB512">512 GB</label>

                
                <input type="radio" id="GB1024"/>
                <label htmlFor="GB1024">1024 GB</label>
            </li>
        </ul>
    </form>
  )
}

export default Form