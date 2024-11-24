import Card from "../ui/dashboard/card/card"
import Checks from "../ui/dashboard/check/check"
import Payments from "../ui/dashboard/payment/payment"
import styles from "../ui/dashboard/dashboard.module.css"

const Dashboard = () => {
    return (
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.cards}>
            <Card/>
            <Card/>
            <Card/>
          </div>
          <Checks />
          <Payments />
        </div>
      </div>
    )
  }
  
  export default Dashboard