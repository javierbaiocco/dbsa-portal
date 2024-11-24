import styles from './check.module.css'


const Check  = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.table}>Cheques Activos</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td># Cheque</td>
                        <td>Fec. Ingreso</td>
                        <td>Fec. Cobro</td>
                        <td>Emisor</td>
                        <td>Origen</td>
                        <td>Estado</td>
                        <td>Importe</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>00014-124-56478964</td>
                        <td>02-Nov-2024</td>
                        <td>16-Nov-2024</td>
                        <td>San Carlos S.A</td>
                        <td>Casa Maci SRL</td>
                        <td>
                            <span className={`${styles.status} ${styles.activo}`}> Activo</span>
                        </td>
                        <td>1265154.66</td>
                    </tr>
                    <tr>
                        <td>00014-124-56478964</td>
                        <td>02-Nov-2024</td>
                        <td>16-Nov-2024</td>
                        <td>San Carlos S.A</td>
                        <td>Casa Maci SRL</td>
                        <td>
                            <span className={`${styles.status} ${styles.rechazado}`}> Rechazado</span>
                        </td>
                        <td>1265154.66</td>
                    </tr>
                    <tr>
                        <td>00014-124-56478964</td>
                        <td>02-Nov-2024</td>
                        <td>16-Nov-2024</td>
                        <td>San Carlos S.A</td>
                        <td>Casa Maci SRL</td>
                        <td>
                            <span className={`${styles.status} ${styles.entregado}`}> Entregado</span>
                        </td>
                        <td>1265154.66</td>
                    </tr>
                    <tr>
                        <td>00014-124-56478964</td>
                        <td>02-Nov-2024</td>
                        <td>16-Nov-2024</td>
                        <td>San Carlos S.A</td>
                        <td>Casa Maci SRL</td>
                        <td>
                            <span className={`${styles.status} ${styles.vencido}`}> Vencido</span>
                        </td>
                        <td>1265154.66</td>
                    </tr>
                    <tr>
                        <td>00014-124-56478964</td>
                        <td>02-Nov-2024</td>
                        <td>16-Nov-2024</td>
                        <td>San Carlos S.A</td>
                        <td>Casa Maci SRL</td>
                        <td>
                            <span className={`${styles.status} ${styles.activo}`}> Activo</span>
                        </td>
                        <td>1265154.66</td>
                    </tr>
                    <tr>
                        <td>00014-124-56478964</td>
                        <td>02-Nov-2024</td>
                        <td>16-Nov-2024</td>
                        <td>San Carlos S.A</td>
                        <td>Casa Maci SRL</td>
                        <td>
                            <span className={`${styles.status} ${styles.activo}`}> Activo</span>
                        </td>
                        <td>1265154.66</td>
                    </tr>
                    <tr>
                        <td>00014-124-56478964</td>
                        <td>02-Nov-2024</td>
                        <td>16-Nov-2024</td>
                        <td>San Carlos S.A</td>
                        <td>Casa Maci SRL</td>
                        <td>
                            <span className={`${styles.status} ${styles.activo}`}> Activo</span>
                        </td>
                        <td>1265154.66</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )

}

export default Check

