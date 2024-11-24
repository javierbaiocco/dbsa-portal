import Search from "../../ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import styles from "../../ui/dashboard/users/users.module.css";
import Link from "next/link";

const UsersPage = () => {
    return (
      <div className={styles.container}>
        <div className={styles.top}>
           <Search placeholder="Buscar un usuario..."/> 
          <Link href="/dashboard/users/add">
            <button className={styles.addButton}>Nuevo Usuario</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
              <tr>
                <td>Nombre</td>
                <td>Email</td>
                <td>Creacion</td>
                <td>Rol</td>
                <td>Estado</td>
                <td>Accion</td>
              </tr>
          </thead>
          <tbody>
            <tr>
                <td>
                  <div className={styles.user}>
                    <img src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />
                    Javier Baiocco
                  </div>
                </td>
                <td>javierbaiocco@gmail.com</td>
                <td>11-11-2024</td>
                <td>Administrador</td>
                <td>Activo</td>
                <td>
                <div className={styles.buttons}>
                    <Link href="/dashboard/users/test"> 
                      <button className={`${styles.button} ${styles.view}`}>Ver</button>
                    </Link>                    
                    <Link href="/">  
                      <button className={`${styles.button} ${styles.delete}`}>Eliminar</button>
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={styles.user}>
                    <img src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />
                    Alan Romero
                  </div>
                </td>
                <td>alanromero@gmail.com</td>
                <td>11-11-2024</td>
                <td>Cobrador</td>
                <td>Activo</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href="/dashboard/users/test"> 
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
  
  export default UsersPage  