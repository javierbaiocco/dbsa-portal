import styles from "./card.module.css"
import { MdSupervisedUserCircle } from "react-icons/md"

const Card  = () => {
    return (
        <div className={styles.container}>
            <MdSupervisedUserCircle size={24}/>
            <div className={styles.texts}>
                <span className={styles.title}>Total de Usuarios</span>
                <span className={styles.number}>6</span>
            </div>
        </div>
    )

}

export default Card
