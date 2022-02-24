import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./patientData.module.scss";
import * as MdIcons from "react-icons/md";

const PatientData = () => {
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
              <h3>Dashboard</h3>
              <h5>Inventory List</h5>
              <div className={styles.inventoryListItems}>
                <div>Lorem ipsum dolo</div>
                <div>5</div>
              </div>
            </div>
          </div>
          <div className={styles.dataParent}>
            <div className={styles.dataContainer}>
              <div className={styles.formIcon}>
                <MdIcons.MdOutlineInventory />
              </div>
              <span>Upload Patient Data</span>
              <form>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    className={styles.formControl}
                    required
                    placeholder="Full Name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    className={styles.formControl}
                    required
                    placeholder="Card No"
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    className={styles.formControl}
                    required
                    placeholder="Phone Number"
                  />
                </div>
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientData;
