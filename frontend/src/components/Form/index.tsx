"use client"
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

    function handleSubmit(evt) {
        evt.preventDefault()

        // const data = fetch("http://127.0.0.1:5000/", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         YEAR: evt
        //     })
        // })

        console.log(evt)
    }

    return (
        <form onSubmit={handleSubmit} className={"glassmorph " + styles.form}>
            <ul>
                <li>
                    <label>Year:</label>
                    <input type="number" name="year"/>
                </li>
                <li>
                    <label>Special Edition</label>
                    <p className={styles.detail}>S, Pro, etc</p>
                    <input type="radio" value="yes" name="special" id="special-yes" defaultChecked/>
                    <label htmlFor="special-yes">Yes</label>
                    <input type="radio" value="no" name="special" id="special-no"/>
                    <label htmlFor="special-no">No</label>
                </li>
                <li>
                    <label>Large Size</label>
                    <p className={styles.detail}>Plus, Max, etc</p>
                    <input type="radio" value="yes" name="large" id="large-yes" defaultChecked/>
                    <label htmlFor="large-yes">Yes</label>
                    <input type="radio" value="no" name="large" id="large-no"/>
                    <label htmlFor="large-no">No</label>
                </li>
            </ul>
            <ul>
                {memoryItems.map((item) => (
                    <li>
                        <input type="radio" id={item.id} value={item.value} name="memory-item" defaultChecked={item.value === 32}/>
                        <label htmlFor={item.id}>{item.label}</label>
                    </li>
                ))}
            </ul>
            <button type="submit" className={"blue button "}>GO</button>
        </form>
    )
}

export default Form