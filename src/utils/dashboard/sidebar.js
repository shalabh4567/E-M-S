import React from 'react';
import styles from "./Dashboard.module.css";
import logo from '../../DashboardImages/EyLogoD.png';
import './Dashboard.css';

const Sidebar = () => {
  return (
    <div className={`${styles.sidebar} hello`}>
        <div className={styles['side-logo']}>
            <img src={logo}/>
            <span className={styles['side-logo-name']}>Ernst & Young</span>
        </div>
        <ul className={styles.sidenav}>
            <li className={styles.active}>
                <a href="#">
                    <i className={'bx bx-grid-alt'} ></i>
                    <span className={styles[`link-name`]}>Dashboard</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className={'bx bx-box'} ></i>
                    <span className={styles['link-name']}>Product</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className={'bx bx-list-ul'} ></i>
                    <span className={styles["link-name"]}>Order list</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className={'bx bx-pie-chart-alt-2'} ></i>
                    <span className={styles['link-name']}>Analytics</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className={'bx bx-coin-stack'} ></i>
                    <span className={styles['link-name']}>Stock</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className={'bx bx-book-alt'} ></i>
                    <span className={styles['link-name']}>Total order</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className={'bx bx-user'} ></i>
                    <span className={styles["link-name"]}>Team</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className={'bx bx-message'} ></i>
                    <span className={styles['link-name']}>Messages</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className={'bx bx-heart'} ></i>
                    <span className={styles['link-name']}>Favorites</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className={'bx bx-cog'} ></i>
                    <span className={styles['link-name']}>Setting</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className={'bx bx-log-out'}></i>
                    <span className={styles['link-name']}>Log Out</span>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar;