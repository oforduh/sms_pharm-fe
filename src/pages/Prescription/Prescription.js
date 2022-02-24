import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./prescription.module.scss";

const Prescription = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div>
      <div className={styles.dashboardParentDiv}>
        <Navbar sidebar={sidebar} setSidebar={setSidebar} />
        <div
          className={`${styles.dashboardContentDiv} ${
            sidebar && styles.active
          } `}
        >
          <div className={styles.inventoryParent}>
            <div className={styles.inventoryContainer}>
              <h3>Dashboard</h3>d Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Consectetur cumque ducimus distinctio
              repellendus delectus dolorum laborum, a, eius amet vero dolorem
              velit, cum aliquid quidem odit reprehenderit magnam pariatur
              beatae. wi
            </div>
          </div>
          <div className={styles.dataParent}>
            <div className={styles.dataContainer}>
              <h3>Dashboard</h3>d Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Consectetur cumque ducimus distinctio
              repellendus delectus dolorum laborum, a, eius amet vero dolorem
              velit, cum aliquid quidem odit reprehenderit magnam pariatur
              beatae. wi
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prescription;
