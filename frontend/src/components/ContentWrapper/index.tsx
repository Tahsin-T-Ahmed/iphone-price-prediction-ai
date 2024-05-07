import type {FC} from "react"
import styles from "./styles.module.scss"

type ContentWrapperProps = {
    children: React.ReactNode
}

const ContentWrapper:FC<ContentWrapperProps> = ({children}) => {
  return (
    <div className={styles.wrapper}>
        {children}
    </div>
  )
}

export default ContentWrapper