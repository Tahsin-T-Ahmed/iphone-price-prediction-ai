import type {FC} from "react"
import styles from './styles.module.scss'

type ResultProps = {
  price: number;
  graphImg: string;
  isLoading: boolean;
}

const Result:FC<ResultProps> = ({price, graphImg, isLoading}) => {
  return (
    <section className={`glassmorph ${styles["result-section"]}`}>
        <h3>{price ? `Price: $${price}` : `Enter form details and click "GO"`}</h3>
        {!isLoading ? <img src={graphImg} /> : <div className={styles.loading}>Loading...</div>}
    </section>
  )
}

export default Result