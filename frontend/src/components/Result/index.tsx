"use client"
import "@/app/globals.scss"
import styles from './Result.module.scss'

const Result = ({formData}) => {
  return (
    <section className={"glassmorph"}>
        <h2>${formData.price}</h2>
    </section>
  )
}

export default Result