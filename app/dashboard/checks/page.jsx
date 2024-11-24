import Search from "../../ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import styles from "../../ui/dashboard/users/users.module.css";
import Link from "next/link";

const CheckPage = () => {
    return (
      <div className={styles.container}>
        <div className={styles.top}>
           <Search placeholder="Buscar un cheque..."/> 
           <div className={styles.buttons}>
            <Link href="/dashboard/check/bulkEntrega">
              <button className={styles.addButton}>Entrega en lote</button>
            </Link>
            <Link href="/dashboard/check/add">
              <button className={styles.addButton}>Nuevo Cheque</button>
            </Link>
          </div>  
        </div>
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
                <td>Accion</td>
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
                <td>
                  <div className={styles.buttons}>
                      <Link href="/"> 
                        <button className={`${styles.button} ${styles.view}`}>Ver</button>
                      </Link>                    
                      <Link href="/">  
                        <button className={`${styles.button} ${styles.delete}`}>Eliminar</button>
                      </Link>
                    </div>
                </td>
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
                <td>
                  <div className={styles.buttons}>
                    <Link href="/"> 
                      <button className={`${styles.button} ${styles.view}`}>Ver</button>
                    </Link>                    
                    <Link href="/">  
                      <button className={`${styles.button} ${styles.delete}`}>Eliminar</button>
                    </Link>
                  </div>
                </td>
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
                <td>
                  <div className={styles.buttons}>
                    <Link href="/"> 
                      <button className={`${styles.button} ${styles.view}`}>Ver</button>
                    </Link>                    
                    <Link href="/">  
                      <button className={`${styles.button} ${styles.delete}`}>Eliminar</button>
                    </Link>
                  </div>
                </td>
              </tr>

          </tbody>
        </table>
        <Pagination />
      </div>

    )
  }
  
  export default CheckPage  