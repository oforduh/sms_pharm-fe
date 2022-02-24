import React from "react";
import styles from "./mLoader.module.scss";

const MLoader = () => {
  return (
    <div className={styles.loaderParent}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default MLoader;
