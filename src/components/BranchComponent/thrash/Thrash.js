import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; //
import Table, { TableRow, TableBody } from "../../../components/Table/Table.js";
// icon for pagination
import prev_icon from "../../../assets/prev-icon.jpeg";
import next_icon from "../../../assets/next-icon.jpeg";
import styles from "./thrash.module.scss";
import ReactPaginate from "react-paginate";
import { AiFillDelete } from "react-icons/ai";
import { MdRestorePage } from "react-icons/md";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import TableLoader from "../../../components/LoaderTable/TableLoader";
import { Link } from "react-router-dom";
import {
  handleDeleteBranchData,
  handleGetThrash,
  handleRestoreBranchData,
} from "./handleThrashData.js";
dayjs.extend(localizedFormat);

const Thrash = ({ token, branchrefreshData, branchcurrentPage }) => {
  const [initialRender, setInitialRender] = useState(true);
  const [thrashData, setThrashData] = useState(null);

  const nextLabel = <img src={next_icon} alt="next" />;
  const prevLabel = <img src={prev_icon} alt="prev" />;

  // pageIndex is the current page
  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [errorMessage, setErrorMessage] = useState(false);

  // This functionality runs when there is an error message and pops the message as an alert
  useEffect(() => {
    if (!errorMessage) return;
    toast.error(errorMessage);
  }, [errorMessage]);

  //   This functionality runs for the first time to get all branch
  useEffect(() => {
    handleGetThrash({
      token,
      setloadingPage,
      setloadingTable,
      setThrashData,
      setTotalPages,
      sort,
      setErrorMessage,
    });
    // console.log("This is the initial render");
    setInitialRender(false);
  }, []);

  // This functionality runs when you select a new page
  const refreshData = (page) => {
    handleGetThrash({
      token,
      setloadingTable,
      setloadingPage,
      setErrorMessage,
      setThrashData,
      setTotalPages,
      page,
      limit,
      sort,
    });
    // console.log("This is the page render");
  };

  //  limit starts here
  const [limit, setLimit] = useState(10);
  //functionality that set limit for pagination
  const handleSelectedLimit4Pagination = (e) => {
    setLimit(e.target.value);
  };

  //   This functionality runs when the limit changes
  useEffect(() => {
    const getPaginationLimit = () => {
      let page = currentPage;
      handleGetThrash({
        token,
        setloadingTable,
        setloadingPage,
        setErrorMessage,
        setThrashData,
        setTotalPages,
        page,
        limit,
        sort,
      });
    };
    !initialRender && getPaginationLimit();
  }, [limit]);

  //  limit starts here

  // sort starts here
  //functionality that handles sort by most recent files
  const [sort, setSort] = useState(-1);

  const handleSortByMostRecentData = (e) => {
    setSort(e.target.value);
  };
  //   This functionality runs when newest to oldest or oldest to newest changes
  useEffect(() => {
    const getMostRecentData = () => {
      let page = currentPage;
      handleGetThrash({
        token,
        setloadingTable,
        setloadingPage,
        setErrorMessage,
        setThrashData,
        setTotalPages,
        page,
        limit,
        sort,
      });
    };
    !initialRender && getMostRecentData();
  }, [sort]);

  // sort stops here

  // set Table loader on the table parent container
  const [loadingTable, setloadingTable] = useState(false);

  const [loadingPage, setloadingPage] = useState(false);

  // DELETE AND RESTORE FUNCTIONALITY STARTS HERE
  // sweet alert functionality to delete and restore thrash starts here
  const sweetAlertFunctionality4Delete = (item) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            console.log(item);
            selectBranchId2Delete(item);
          },
        },
        {
          label: "No",
          onClick: () => {
            return;
          },
        },
      ],
    });
  };

  const sweetAlertFunctionality4Restore = (item) => {
    confirmAlert({
      title: "Confirm to Restore",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            selectBranchId2Restore(item);
          },
        },
        {
          label: "No",
          onClick: () => {
            return;
          },
        },
      ],
    });
  };
  // sweet alert functionality starts here

  const selectBranchId2Delete = (item) => {
    permanentlyDeleteBranch(item._id);
  };

  const selectBranchId2Restore = (item) => {
    restoreThrashedBranch(item._id);
  };

  // This functionality select the id of the modal to permanentlyDelete
  const permanentlyDeleteBranch = (deleteBranchId) => {
    handleDeleteBranchData({
      token,
      refreshData,
      currentPage,
      deleteBranchId,
    });
  };

  // This functionality select the id of the modal to Restore
  const restoreThrashedBranch = (restoreBranchId) => {
    handleRestoreBranchData({
      token,
      refreshData,
      currentPage,
      restoreBranchId,
      branchrefreshData,
      branchcurrentPage,
    });
  };

  // DELETE AND RESTORE FUNCTIONALITY END HERE

  return (
    <div className={styles.thrashPageContainer}>
      <div className={styles.thrashPageDiv}>
        <div div className={styles.sortParentDiv}>
          <div className={styles.sortContentDiv}>
            <label>Show: </label>
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
            <label className={styles.margin4SortByMostRecent}>Sort by: </label>
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
        <>
          <div className={styles.branchTableParentDiv}>
            <div className={styles.branchTableCont}>
              {thrashData && !loadingTable ? (
                <>
                  <Table
                    headerData={[
                      "Checkbox",
                      "S/N",
                      "Branch",
                      "Date and time",
                      "Restore",
                      "Delete",
                    ]}
                    headerUnderlined={true}
                    columnStyles={[
                      {
                        justifyContent: "center",
                        width: "5%",
                      },
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
                        width: "5%",
                      },
                      {
                        justifyContent: "center",
                        width: "5%",
                      },
                    ]}
                  >
                    <TableBody>
                      {thrashData.map((item, index) => {
                        return (
                          <TableRow
                            key={index}
                            rowData={[
                              {
                                text: (
                                  <input
                                    type="checkbox"
                                    id={item._id}
                                    name={item._id}
                                    value="Bike"
                                  />
                                ),
                                styles: { width: "5%" },
                              },
                              {
                                text: `${index + 1}`,
                                styles: { width: "5%" },
                              },

                              {
                                onClick: () => {
                                  console.log("yes");
                                },
                                text: <Link to="#">{item.branch}</Link>,
                                styles: {
                                  width: "20%",
                                  cursor: "pointer",
                                },
                                className: "tableLinks",
                              },
                              {
                                text: `${dayjs(item.createdAt).format("llll")}`,
                                styles: { width: "20%" },
                              },
                              {
                                onClick: () => {
                                  sweetAlertFunctionality4Restore(item);
                                },
                                text: <MdRestorePage />,
                                styles: {
                                  width: "5%",
                                  fontSize: "20px",
                                  color: "var(--primary)",
                                  cursor: "pointer",
                                },
                              },
                              {
                                onClick: () => {
                                  sweetAlertFunctionality4Delete(item);
                                },
                                text: <AiFillDelete />,
                                styles: {
                                  width: "5%",
                                  fontSize: "20px",
                                  color: "rgba(255, 0, 0, 0.683)",
                                  cursor: "pointer",
                                },
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
        </>
      </div>
    </div>
  );
};

export default Thrash;
