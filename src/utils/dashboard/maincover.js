import React from "react";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";
import "./Dashboard.css";

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
          <table class="table">
  <thead>
    <tr>
      <th scope="col">Emp Id</th>
      <th scope="col">Emp Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Designation</th>
      <th scope="col">Salary</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>
      <th scope="col">Joining date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">56</th>
      <td>Mayank</td>
      <td>Male</td>
      <td>SDE</td>
      <td>26000</td>
      <td>mayank@gmail.com</td>
      <td>2022-04-01</td>
      <td>2022-04-30</td>
    </tr>
  </tbody>
</table>
          <div className={styles.button}>
            <Link to="/empdata">See All</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Main;
