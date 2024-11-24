import styles from "@/app/ui/dashboard/users/singleUserPage/singleUserPage.module.css";

const SingleUserPage = () => {
    return (
      <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <img src="/noavatar.png" alt="" fill />
            </div>
            Javier Baiocco   
        </div>
        <div className={styles.formContainer}>  
            <form action="" className={styles.form}>
              <label>Nombre</label>
              <input type="text" name="username" placeholder="Javier Baiocco"></input>
              <label>Email</label>
              <input type="email" name="email" placeholder="javierbaiocco@gmail.com"></input>
              <label>Password</label>
              <input type="Password" name="Password" placeholder="secret"></input>
              <label>Creation Date</label>
              <input type="text" name="creationdate" placeholder="11-11-2024"></input>
              <label>Rol</label>
              <input type="text" name="role" placeholder="Administrador"></input>
              <label>Estado</label>
              <select name="estado" id = "estado">
                  <option value = {true}> Activo</option>
                  <option value = {false}>Inactivo</option>
              </select>
              <button>Actualizar</button>
            </form>
        </div>
        
      </div>
    )

  }
  
  export default SingleUserPage
