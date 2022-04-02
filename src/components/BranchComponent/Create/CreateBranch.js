import React, { useState } from "react";
import { UserObject } from "../../../context/User";
import styles from "./createBranch.module.scss";
import { handleCreateBranchData } from "./handleCreateBranch";

const CreateBranch = () => {
  const { token } = UserObject();
  const [createBranchData, setcreateBranchData] = useState(false);
  const [branch, setbranch] = useState("");
  return (
    <div className={styles.createBranchParentDiv}>
      <div className={styles.createBranchCont}>
        {" "}
        <div className={styles.formContainer}>
          <form
            onSubmit={(e) => {
              handleCreateBranchData({
                e,
                state: { branch },
                token,
                setcreateBranchData,
              });
            }}
          >
            <label htmlFor="">Branch</label>
            <input
              type="text"
              required
              placeholder="Enter a value"
              value={branch}
              onChange={(event) => {
                setbranch(event.target.value);
              }}
            />
            <div className={styles.buttonContainer}>
              <button
                style={{
                  opacity: createBranchData && 0.5,
                }}
              >
                {createBranchData ? "Creating" : "Create"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBranch;
