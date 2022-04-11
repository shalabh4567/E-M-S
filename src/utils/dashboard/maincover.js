import React from "react";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";

function Main() {
  return (
    <section className={styles.main}>
      <div className={styles.displays}>
        <div className={styles.widgets}>
          <div className={styles.boxes}>
            <div className={styles.leftBox}>
              <div className={styles.boxValue}>Total Employee</div>
              <div className={styles.numbers}>86,371</div>
            </div>
            <i className={`bx bx-cart-alt ${styles.cart}`}></i>
          </div>

          <div className={styles.boxes}>
            <div className={styles.leftBox}>
              <div className={styles.boxValue}>Total Designation</div>
              <div className={styles.numbers}>39,162</div>
            </div>
            <i
              className={`bx bxs-cart-add ${styles.cart} ${styles.second}`}
            ></i>
          </div>

          <div className={styles.boxes}>
            <div className={styles.leftBox}>
              <div className={styles.boxValue}>Total Emp Present</div>
              <div className={styles.numbers}>$17,382</div>
            </div>
            <i
              className={`bx bxs-cart cart ${styles.cart} ${styles.third}`}
            ></i>
          </div>

          <div className={styles.boxes}>
            <div className={styles.leftBox}>
              <div className={styles.boxValue}>Total Absent</div>
              <div className={styles.numbers}>10,829</div>
            </div>
            <i
              className={`bx bxs-cart-download ${styles.cart} ${styles.fourth}`}
            ></i>
          </div>
        </div>
      </div>

      <div className={styles.empbox}>
        <div className={`${styles.empvalue} ${styles.box}`}>
          <div className={styles.title}>Employee Details</div>
          <div className={styles["emp-details"]}>
            <ul className={styles.details}>
              <li className={styles.heading}>Emp Name</li>
              <li className={styles.value}>Abhishek</li>
              <li className={styles.value}>Abhishek</li>
              <li className={styles.value}>Abhishek</li>
              <li className={styles.value}>Abhishek</li>
              <li className={styles.value}>Abhishek</li>
              <li className={styles.value}>Abhishek</li>
              <li className={styles.value}>Abhishek</li>
              <li className={styles.value}>Abhishek</li>
            </ul>

            <ul className={styles.details}>
              <li className={styles.heading}>Emp Id</li>
              <li className={styles.value}>123456</li>
              <li className={styles.value}>123456</li>
              <li className={styles.value}>123456</li>
              <li className={styles.value}>123456</li>
              <li className={styles.value}>123456</li>
              <li className={styles.value}>123456</li>
              <li className={styles.value}>123456</li>
              <li className={styles.value}>123456</li>
            </ul>

            <ul className={styles.details}>
              <li className={styles.heading}>Gender</li>
              <li className={styles.value}>Male</li>
              <li className={styles.value}>Male</li>
              <li className={styles.value}>Male</li>
              <li className={styles.value}>Male</li>
              <li className={styles.value}>Male</li>
              <li className={styles.value}>Male</li>
              <li className={styles.value}>Male</li>
              <li className={styles.value}>Male</li>
            </ul>

            <ul className={styles.details}>
              <li className={styles.heading}>Designation</li>
              <li className={styles.value}>Engineer</li>
              <li className={styles.value}>Engineer</li>
              <li className={styles.value}>Engineer</li>
              <li className={styles.value}>Engineer</li>
              <li className={styles.value}>Engineer</li>
              <li className={styles.value}>Engineer</li>
              <li className={styles.value}>Engineer</li>
              <li className={styles.value}>Engineer</li>
            </ul>

            <ul className={styles.details}>
              <li className={styles.heading}>Salary</li>
              <li className={styles.value}>6,00,000</li>
              <li className={styles.value}>6,00,000</li>
              <li className={styles.value}>6,00,000</li>
              <li className={styles.value}>6,00,000</li>
              <li className={styles.value}>6,00,000</li>
              <li className={styles.value}>6,00,000</li>
              <li className={styles.value}>6,00,000</li>
              <li className={styles.value}>6,00,000</li>
            </ul>

            <ul className={styles.details}>
              <li className={styles.heading}>Email</li>
              <li className={styles.value}>xyz@gmail.com</li>
              <li className={styles.value}>xyz@gmail.com</li>
              <li className={styles.value}>xyz@gmail.com</li>
              <li className={styles.value}>xyz@gmail.com</li>
              <li className={styles.value}>xyz@gmail.com</li>
              <li className={styles.value}>xyz@gmail.com</li>
              <li className={styles.value}>xyz@gmail.com</li>
              <li className={styles.value}>xyz@gmail.com</li>
            </ul>

            <ul className={styles.details}>
              <li className={styles.heading}>DOB</li>
              <li className={styles.value}>9 Jan 2000</li>
              <li className={styles.value}>9 Jan 2000</li>
              <li className={styles.value}>9 Jan 2000</li>
              <li className={styles.value}>9 Jan 2000</li>
              <li className={styles.value}>9 Jan 2000</li>
              <li className={styles.value}>9 Jan 2000</li>
              <li className={styles.value}>9 Jan 2000</li>
              <li className={styles.value}>9 Jan 2000</li>
            </ul>

            <ul className={styles.details}>
              <li className={styles.heading}>Joining Date</li>
              <li className={styles.value}>16 May 2022</li>
              <li className={styles.value}>16 May 2022</li>
              <li className={styles.value}>16 May 2022</li>
              <li className={styles.value}>16 May 2022</li>
              <li className={styles.value}>16 May 2022</li>
              <li className={styles.value}>16 May 2022</li>
              <li className={styles.value}>16 May 2022</li>
              <li className={styles.value}>16 May 2022</li>
            </ul>

            <ul className={styles.details}>
              <li className={styles.heading}>Address</li>
              <li className={styles.value}>Jamshedpur</li>
              <li className={styles.value}>Jamshedpur</li>
              <li className={styles.value}>Jamshedpur</li>
              <li className={styles.value}>Jamshedpur</li>
              <li className={styles.value}>Jamshedpur</li>
              <li className={styles.value}>Jamshedpur</li>
              <li className={styles.value}>Jamshedpur</li>
              <li className={styles.value}>Jamshedpur</li>
            </ul>
          </div>
          <div className={styles.button}>
            <Link to="/empdata">See All</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Main;
