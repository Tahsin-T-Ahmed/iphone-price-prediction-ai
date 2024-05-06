"use client"
import { useState } from "react"
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

const Form = ({setFormData, setGraphImg}) => {

    async function handleSubmit(evt) {
        evt.preventDefault()

        const formData = {
            year: evt.target.year.value,
            special: Number(evt.target.special.value === "yes") ? 1 : 0,
            large: Number(evt.target.large.value === "yes") ? 1 : 0,
            memory: evt.target["memory-item"].value
        }

        await fetch("/api/pred", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                year: formData.year,
                special: formData.special,
                large: formData.large,
                memory: formData.memory 
            })
        })
        .then(res => res.text())
        .then(data => {
            const result = Math.floor(data * 100) / 100

            formData.price = result 
    
            setFormData(formData)
        })

        await fetch("/api/graph", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.blob())
        .then(blob => {
            setGraphImg(URL.createObjectURL(blob))
        })
    }

    const currentDate = new Date();

    return (
        <form onSubmit={handleSubmit} className={"glassmorph " + styles.form}>
            <ul>
                <li>
                    <label className={styles.feature}>Year:</label>
                    <input type="number" 
                    name="year" 
                    placeholder="YYYY" 
                    defaultValue={currentDate.getFullYear() + 1}
                    style={{
                        fontSize: "1rem",
                    }}
                    />
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
                    <li key={item.id}>
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