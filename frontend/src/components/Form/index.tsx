import "@/app/globals.scss"
import styles from "./Form.module.scss"

const memoryItems = [
    {value: 32, label: "32 GB", id: "GB_32"},
    {value: 64, label: "64 GB", id: "GB_64"},
    {value: 128, label: "128 GB", id: "GB_128"},
    {value: 256, label: "256 GB", id: "GB_256"},
    {value: 512, label: "512 GB", id: "GB_512"},
    {value: 1024, label: "1024 GB", id: "GB_1024"},
]

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
            </li>
            <li>
                <input type="radio" id="GB64"/>
                <label htmlFor="GB64">64 GB</label>
            </li>
            <li>
                <input type="radio" id="GB128"/>
                <label htmlFor="GB128">128 GB</label>
            </li>
            <li>
                <input type="radio" id="GB256"/>
                <label htmlFor="GB256">256 GB</label>
            </li>
            <li>                
                <input type="radio" id="GB512"/>
                <label htmlFor="GB512">512 GB</label>
            </li>
            <li>                
                <input type="radio" id="GB1024"/>
                <label htmlFor="GB1024">1024 GB</label>
            </li>
        </ul>
    </form>
  )
}

export default Form