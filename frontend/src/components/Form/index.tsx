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
                    <label className={styles.feature}>Year:</label>
                    <input type="number" name="year"/>
                </li>
                <li>
                    <label className={styles.feature}>Special Edition</label>
                    <p className={styles.detail}>S, Pro, etc</p>
                    <input type="radio" value="yes" name="special" id="special-yes" defaultChecked/>
                    <label className={"btn blue"} htmlFor="special-yes">Yes</label>
                    <input type="radio" value="no" name="special" id="special-no"/>
                    <label className={"btn blue"} htmlFor="special-no">No</label>
                </li>
                <li>
                    <label className={styles.feature}>Large Size</label>
                    <p className={styles.detail}>Plus, Max, etc</p>
                    <input type="radio" value="yes" name="large" id="large-yes" defaultChecked/>
                    <label className={"btn blue"} htmlFor="large-yes">Yes</label>
                    <input type="radio" value="no" name="large" id="large-no"/>
                    <label className={"btn blue"} htmlFor="large-no">No</label>
                </li>
            </ul>
            <ul>
                <p className={styles.feature} style={{margin: 0, padding: 0}}>Memory (Storage)</p>
                {memoryItems.map((item) => (
                    <li>
                        <input type="radio" id={item.id} value={item.value} name="memory-item" defaultChecked={item.value === 32}/>
                        <label htmlFor={item.id} style={{
                            borderRadius: (item.value === 32 ? "0.5rem 0.5rem 0 0" : (item.value === 1024 ? "0 0 0.5rem 0.5rem" : "0px"))
                        }}>{item.label}</label>
                    </li>
                ))}
            </ul>
            <button type="submit" className={"btn blue"} style={{
                marginTop: "2rem"
            }}>GO</button>
        </form>
    )
}

export default Form