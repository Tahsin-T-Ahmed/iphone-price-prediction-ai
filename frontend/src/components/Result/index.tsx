"use client"
import "@/app/globals.scss"
import styles from './Result.module.scss'

const Result = ({formData}) => {
  return (
    <section className={`glassmorph ${styles["result-section"]}`}>
        <h3>{formData.price ? `Price: $${formData.price}` : `Enter form details and click "GO"`}</h3>
    </section>
  )
}

export default Result