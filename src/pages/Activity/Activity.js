import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./activity.module.scss";
import * as BsIcons from "react-icons/bs";
import Table, { TableRow, TableBody } from "../../components/Table/Table.js";
import { handleGetActivity } from "./handleActivity";
import { toast } from "react-toastify";
import MLoader from "../../components/miniLoader/mLoader";
import { UserObject } from "../../context/User";
import ReactPaginate from "react-paginate";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import TableLoader from "../../components/LoaderTable/TableLoader";
dayjs.extend(localizedFormat);

const Activity = () => {
  // pageIndex is the current page
  const [pageIndex, setPageIndex] = useState(null);
  const [totalPages, setTotalPages] = useState(null);

  const { token } = UserObject();
  const [sidebar, setSidebar] = useState(false);

  // This state is used to handle alert
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loadingPage, setloadingPage] = useState(false);
  const [loadingTable, setloadingTable] = useState(false);
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

  const refreshData = (page) => {
    handleGetActivity({
      token,
      setErrorMessage,
      setSuccessMessage,
      setloadingTable,
      setloadingPage,
      setActivityData,
      setTotalPages,
      setPageIndex,
      page,
    });
  };

  //   This functionality runs
  useEffect(() => {
    handleGetActivity({
      token,
      setErrorMessage,
      setSuccessMessage,
      setloadingPage,
      setloadingTable,
      setActivityData,
      setTotalPages,
      setPageIndex,
    });
  }, []);

  return (
    <div className={styles.activityParentDiv}>
      <Navbar sidebar={sidebar} setSidebar={setSidebar} />
      <div
        className={`${styles.activityContentDiv} ${sidebar && styles.active} `}
      >
        {loadingPage ? (
          <MLoader />
        ) : (
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
                {activityData && !loadingTable ? (
                  <>
                    <Table
                      headerData={["S/N", "User", "Activity", "Date and time"]}
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
                              key={index}
                              rowData={[
                                {
                                  text: `${index + 1}`,
                                  styles: { width: "5%" },
                                },

                                {
                                  text: `${item.user.fName} ${item.user.lName}`,
                                },
                                {
                                  text: `${item.type}`,
                                },
                                {
                                  text: `${dayjs(item.createdAt).format(
                                    "llll"
                                  )}`,
                                },
                              ]}
                            />
                          );
                        })}
                      </TableBody>
                    </Table>
                  </>
                ) : (
                  <div className={styles.loaderContainer}>
                    <TableLoader />
                  </div>
                )}

                <div className={styles.paginationDiv}>
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={(e) => {
                      refreshData(e.selected + 1);
                    }}
                    pageRangeDisplayed={3}
                    pageCount={totalPages}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Activity;
