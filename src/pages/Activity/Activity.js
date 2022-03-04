import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./activity.module.scss";
import * as BsIcons from "react-icons/bs";
import Table, { TableRow, TableBody } from "../../components/Table/Table.js";
import { handleGetActivity } from "./handleActivity";
import { toast } from "react-toastify";
import MLoader from "../../components/miniLoader/mLoader";
import { UserObject } from "../../context/User";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

const Activity = () => {
  const { token } = UserObject();
  const [sidebar, setSidebar] = useState(false);

  // This state is used to handle alert
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [miniLoader, setMiniLoader] = useState(false);
  const [activityData, setActivityData] = useState(null);

  // This functionality runs when there is an error message and pops the message as an alert
  useEffect(() => {
    if (!errorMessage) return;
    toast.error(errorMessage);
  }, [errorMessage]);

  // This functionality runs when there is an error message and pops the message as an alert
  useEffect(() => {
    if (!successMessage) return;
    toast.success(successMessage);
  }, [successMessage]);

  useEffect(() => {
    handleGetActivity({
      token,
      setErrorMessage,
      setSuccessMessage,
      setMiniLoader,
      setActivityData,
    });
  }, []);

  return (
    <div className={styles.activityParentDiv}>
      <Navbar sidebar={sidebar} setSidebar={setSidebar} />
      <div
        className={`${styles.activityContentDiv} ${sidebar && styles.active} `}
      >
        <div className={styles.activityPageDiv}>
          <div className={styles.activityMenu}>
            <div className={styles.activityText}>
              <h4>ACTIVITY LOG</h4>
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
          <div className={styles.activityTableParentDiv}>
            <div className={styles.activityTableCont}>
              {activityData && (
                <Table
                  headerData={["S/N", "User", "Change", "Date and time"]}
                  headerUnderlined={true}
                  columnStyles={[
                    {
                      justifyContent: "center",
                      width: "5%",
                    },
                    {
                      justifyContent: "center",
                      width: "20%",
                    },
                    {
                      justifyContent: "center",
                      width: "20%",
                    },
                    {
                      justifyContent: "center",
                      width: "20%",
                    },
                  ]}
                >
                  <TableBody>
                    {activityData.map((item, index) => {
                      return (
                        <TableRow
                          rowData={[
                            { text: `${index + 1}`, styles: { width: "5%" } },

                            {
                              text: `${item.user.fName} ${item.user.lName}`,
                            },
                            {
                              text: `${item.type}`,
                            },
                            {
                              text: `${dayjs(item.created_at).format("llll")}`,
                            },
                          ]}
                        />
                      );
                    })}
                  </TableBody>
                </Table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
