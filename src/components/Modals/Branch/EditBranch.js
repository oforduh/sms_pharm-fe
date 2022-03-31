import React, { useState } from "react";
import styles from "./editBranch.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { UserObject } from "../../../context/User";
import { handleUpdateBranchData } from "./handleEditbranch";

const EditBranch = ({
  toggleModalContainer,
  closeEditModal,
  selectedBranch,
  setselectedBranch,
  branchId,
  refreshData,
  currentPage,
}) => {
  // getting the token from context
  const { token } = UserObject();
  const [updatingBranchData, setupdatingBranchData] = useState(false);
  return (
    <>
      {toggleModalContainer && (
        <div className={styles.parentContainer}>
          <div className={styles.contentContainer}>
            <div className={styles.header}>
              <div></div>
              <div className={styles.text}>
                <h4>EDIT BRANCH</h4>
              </div>
              <div className={styles.closeIcon}>
                <AiOutlineClose onClick={closeEditModal} />
              </div>
            </div>
            <div className={styles.body}>
              <div className={styles.bodyContent}>
                <div className={styles.formContainer}>
                  <form
                    onSubmit={(e) => {
                      handleUpdateBranchData({
                        e,
                        state: { branch: selectedBranch },
                        token,
                        branchId,
                        setupdatingBranchData,
                        refreshData,
                        currentPage,
                        closeEditModal
                      });
                    }}
                  >
                    <label htmlFor="">Branch</label>
                    <input
                      type="text"
                      placeholder={selectedBranch}
                      value={selectedBranch}
                      onChange={(event) => {
                        setselectedBranch(event.target.value);
                      }}
                    />
                    <div className={styles.buttonContainer}>
                      <button
                        style={{
                          opacity: updatingBranchData && 0.5,
                        }}
                      >
                        {updatingBranchData ? "Saving" : "Save"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditBranch;
