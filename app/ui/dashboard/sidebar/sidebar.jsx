import MenuLink from "./menuLInk/menuLink";
import styles from "./sidebar.module.css"
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdOutlineSettings,
} from "react-icons/md";

const menuItems = [
    {
        title: "Secciones",
        list: [
            {
                title:"Panel",
                path:"/dashboard",
                icon: <MdDashboard />,
            },
            {
                title:"Usuarios",
                path:"/dashboard/users",
                icon: <MdSupervisedUserCircle />,
            },
            {
                title:"Cheques",
                path:"/dashboard/checks",
                icon: <MdShoppingBag />,
            },
            {
                title:"Pagos",
                path:"/dashboard/payments",
                icon: <MdAttachMoney />
            },
        ],
    },
    {
        title: "Usuario",
        list: [
            {
                title:"Settings",
                path:"/dashboard/setting",
                icon: <MdOutlineSettings />,
            },
        ],
    },
];    


const Sidebar = () => {
    return (
      <div className= {styles.container}>
        <div className={styles.user}>
            <img className={styles.userImage} src="/noavatar.png" alt="" width="50" height="50"></img>
            <div className={styles.userDetail}>  
                <span className={styles.username}>Javier</span>
                <span className={styles.userTitle}>Administrador</span>
            </div>
        </div> 
        <ul className={styles.list}>
            {menuItems.map((cat)=>(
                <li key={cat.title}> 
                    <span className={styles.cat}>{cat.title}</span>
                    {cat.list.map((item)=> (
                        <MenuLink item={item} key={item.title}/>
                    ))}
                </li>
            ))}
        </ul>
      </div>
    );
};
  
export default Sidebar