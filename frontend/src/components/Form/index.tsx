import "@/app/globals.scss"
import styles from "./Form.module.scss"

const memoryItems = [
    {value: 32, label: "32 GB", id: "GB_32"},
    {value: 64, label: "64 GB", id: "GB_64"},
    {value: 128, label: "128 GB", id: "GB_128"},
    {value: 256, label: "256 GB", id: "GB_256"},
    {value: 512, label: "512 GB", id: "GB_512"},
    {value: 1024, label: "1024 GB (1 TB)", id: "GB_1024"},
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
            {memoryItems.map((item) => (
                <li>
                    <input type="radio" id={item.id} value={item.value} name="memory-item"/>
                    <label htmlFor={item.id}>{item.label}</label>
                </li>
            ))}
        </ul>
    </form>
  )
}

export default Form