import styles from './payment.module.css'


const Payment  = () => {
    return (
        <div className={styles.container}>
        <h2 className={styles.table}>Ultimos Pagos</h2>
        <table className={styles.table}>
            <thead>
                <tr>
                    <td>Fecha</td>
                    <td>Cobrador</td>
                    <td>Localidad</td>
                    <td>Cliente</td>
                    <td>Importe</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>02-Nov-2024</td>
                    <td>Alan Romero</td>
                    <td>Gral Lamadrid</td>
                    <td>Casa Maci SRL</td>
                    <td>1265154.66</td>
                </tr>
                <tr>
                    <td>02-Nov-2024</td>
                    <td>Alan Romero</td>
                    <td>Laprida</td>
                    <td>Vergel Julio Cesar</td>
                    <td>1265154.66</td>
                </tr>
                <tr>
                    <td>02-Nov-2024</td>
                    <td>Carlos Ponce</td>
                    <td>Daireaux</td>
                    <td>Casa Maci SRL</td>
                    <td>1265154.66</td>
                </tr>
                <tr>
                    <td>02-Nov-2024</td>
                    <td>Carlos Ponce</td>
                    <td>Daireaux</td>
                    <td>Biain Maria Elena</td>
                    <td>1265154.66</td>
                </tr>
                <tr>
                    <td>02-Nov-2024</td>
                    <td>Alan Romero</td>
                    <td>Gral Lamadrid</td>
                    <td>Casa Maci SRL</td>
                    <td>1265154.66</td>
                </tr>

            </tbody>
        </table>
    </div>
    )

}

export default Payment
