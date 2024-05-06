"use client"
import type {FormData} from "../../model"
import type {FC} from "react"
// import "../../globals.scss"
import styles from './styles.module.scss'

type ResultProps = {
  formData: FormData,
  graphImg: string
}

const Result:FC<ResultProps> = ({formData, graphImg}) => {
  return (
    <section className={`glassmorph ${styles["result-section"]}`}>
        <h3>{formData.price ? `Price: $${formData.price}` : `Enter form details and click "GO"`}</h3>
        {graphImg && <img src={graphImg} />}
    </section>
  )
}

export default Result