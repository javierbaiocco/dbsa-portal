import Card from "../ui/dashboard/card/card"
import Check from "../ui/dashboard/check/check"
import Payment from "../ui/dashboard/payment/payment"
import styles from "../ui/dashboard/dashboard.module.css"

const Dashboard = () => {
    return (
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.cards}>
            <Card />
            <Card />
            <Card />
          </div>
          <Check />
          <Payment />
        </div>
      </div>
    )
  }
  
  export default Dashboard