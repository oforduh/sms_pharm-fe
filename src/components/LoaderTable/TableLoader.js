import React from "react";
import styles from "./tableLoader.module.scss";

const TableLoader = () => {
  return (
    <div className={styles.loaderParent}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default TableLoader;
