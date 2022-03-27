import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./dashboard.module.scss";
import * as BsIcons from "react-icons/bs";
// import { IsLoadingObject } from "../../context/LoaderContext";

const Dashboard = () => {
  // const { setIsLoading } = IsLoadingObject();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //     setIsLoading(false);
  //   }, 1500);
  // }, []);

  const [sidebar, setSidebar] = useState(false);
  return (
    <div className={styles.dashboardParentDiv}>
      <Navbar sidebar={sidebar} setSidebar={setSidebar} />
      <div
        className={`${styles.dashboardContentDiv} ${sidebar && styles.active} `}
      >
        <div className={styles.dashboardPageDiv}>
          <div className={styles.dashboardMenu}>
            <div className={styles.dashboardText}>
              <h4>DASHBOARD</h4>
            </div>
            <div className={styles.searchBarParentContainer}>
              <div className={styles.searchBarCont}>
                <BsIcons.BsSearch className={styles.searchBarIcon} />
                <input type="text" placeholder="Keywords" />
                <button>
                  <BsIcons.BsSearch className={styles.searchBarIcon2} />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.dashboardSection}>
            <div className={styles.filterParentDiv}>first</div>
            <div className={styles.tableParentDiv}>second</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
