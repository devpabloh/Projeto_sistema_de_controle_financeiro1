import { ResumeItem } from "../ResumeItem/ResumeItem";
import { ResumeItem2 } from "../ResumeItem/ResumeItem2";
import { ResumeItem3 } from "../ResumeItem/ResumeItem3";
import styles from "./Resume.module.css";

const Resume = () => {

  return (
    <div className={styles.container}>
        <ResumeItem title="Entradas" >

        </ResumeItem>
        <ResumeItem2 title="Saidas">

        </ResumeItem2>

        <ResumeItem3 title="Total">

        </ResumeItem3>

    </div>
  )
}

export default Resume