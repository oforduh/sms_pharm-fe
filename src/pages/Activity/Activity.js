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

// icon for pagination
import prev_icon from "../../assets/prev-icon.jpeg";
import next_icon from "../../assets/next-icon.jpeg";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import TableLoader from "../../components/LoaderTable/TableLoader";
dayjs.extend(localizedFormat);

const Activity = () => {
  // icon for pagination
  const nextLabel = <img src={next_icon} alt="next" />;
  const prevLabel = <img src={prev_icon} alt="prev" />;

  // pageIndex is the current page
  const [pageIndex, setPageIndex] = useState(null);
  const [totalPages, setTotalPages] = useState(null);

  const { token } = UserObject();
  const [sidebar, setSidebar] = useState(false);

  const [sort, setSort] = useState(-1);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [initialRender, setInitialRender] = useState(true);

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

  // This functionality runs when you select a new page
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
      limit,
    });
  };

  //   This functionality runs for the first time to get all activities log
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
    setInitialRender(false);
  }, []);

  //This functionality runs when the limit changes
  useEffect(() => {
    const getPaginationLimit = () => {
      let page = currentPage;
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
        limit,
      });
    };
    !initialRender && getPaginationLimit();
  }, [limit]);

  //   This functionality runs when newest to oldest or oldest to newest changes
  useEffect(() => {
    const getMostRecentData = () => {
      let page = currentPage;
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
        limit,
        sort,
      });
    };
    !initialRender && getMostRecentData();
  }, [sort]);

  //functionality that set limit for pagination
  const handleSelectedLimit4Pagination = (e) => {
    setLimit(e.target.value);
  };

  //functionality that handles sort by recent files
  const handleSortByMostRecentData = (e) => {
    setSort(e.target.value);
  };

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
              <div className={styles.activityMenuContent}>
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
            </div>
            <div className={styles.sortParentDiv}>
              <div className={styles.sortContentDiv}>
                <label htmlFor="">Show: </label>
                <select
                  value={limit}
                  onChange={(event) => {
                    handleSelectedLimit4Pagination(event);
                  }}
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                </select>
                <label className={styles.margin4SortByMostRecent}>
                  Sort by:{" "}
                </label>
                <select
                  value={sort}
                  onChange={(event) => {
                    handleSortByMostRecentData(event);
                  }}
                >
                  <option value="-1">Newest to oldest</option>
                  <option value="1">Oldest to newest</option>
                </select>
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
              </div>
            </div>
            <div className={styles.paginationDiv}>
              <div className={styles.paginationContDiv}>
                <ReactPaginate
                  breakLabel="..."
                  nextLabel={nextLabel}
                  onPageChange={(e) => {
                    refreshData(e.selected + 1);
                    setCurrentPage(e.selected + 1);
                  }}
                  pageRangeDisplayed={3}
                  pageCount={totalPages}
                  previousLabel={prevLabel}
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
        )}
      </div>
    </div>
  );
};

export default Activity;
