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
        <h3 className={styles.title}>{price ? `Price: $${price}` : `Enter form details and click "GO"`}</h3>
        <div className={styles.illustration}>
          {(isLoading || graphImg) && (
            <>
              {!isLoading ? <img className={styles.img} src={graphImg} alt={"Price Chart"}/> : <div className={styles.loading}>Loading...</div>}
            </>
          )}
        </div>
    </section>
  )
}

export default Result