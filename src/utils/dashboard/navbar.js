import React from "react";
import styles from "./Dashboard.module.css";
import logo from '../../DashboardImages/ProfileImg.jpg';
import './Dashboard.css';

function Nav() {
    const cBtn = () => {      
        let sidebar = document.querySelector(".hello");
        let sidebarBtn = document.querySelector(".sidebarBtn");
            if(sidebar.classList.contains("active")){
                sidebar.classList.remove("active");
                sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
                
            }
            else{
                sidebar.classList.add("active"); 
                sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
            }
    };
  return (
      
    <section className={`${styles.main} ${styles.maN}`}>
        <nav>
            <div className={styles.leftnav}>
                <i className={`bx bx-menu sidebarBtn`} onClick={cBtn}></i>
                <span className={styles.dashboard}>Dashboard</span>
            </div>
            <div className={styles.searchbar}>
                <input type={styles.text} placeholder={'Search...'}/>
                <i className={'bx bx-search'} ></i>
            </div>
            <div className={styles.rightnav}>
                <img src={logo}/>
                <span className={styles.admin_name}>Admin</span>
                <i className={'bx bx-chevron-down'} ></i>
            </div>
        </nav>
    </section> 
  );
}
export default Nav;