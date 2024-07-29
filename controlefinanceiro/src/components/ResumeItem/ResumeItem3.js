import styles from "./ResumeItem.module.css";


export const ResumeItem3 = ({title}) => {
  return (
    <div className={styles.container}>
        <div className={styles.headerCard}>
            <h1 className={styles.headerTitle}>{title}
            </h1>
            
        </div>
        <p><span className={styles.total}>1000</span></p>
    </div>
  )
}

export default ResumeItem3