// for the sweet alert
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; //

import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./branch.module.scss";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import Table, { TableRow, TableBody } from "../../components/Table/Table.js";
import { handleGetbranch, handleThrashBranchData } from "./handleBranch";
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
import { Link } from "react-router-dom";
import EditBranch from "../../components/Modals/Branch/EditBranch";
import CreateBranch from "../../components/BranchComponent/Create/CreateBranch";
import Thrash from "../../components/BranchComponent/thrash/Thrash";
dayjs.extend(localizedFormat);

const Branch = () => {
  // icon for pagination
  const nextLabel = <img src={next_icon} alt="next" />;
  const prevLabel = <img src={prev_icon} alt="prev" />;

  // pageIndex is the current page
  const [pageIndex, setPageIndex] = useState(null);
  const [totalPages, setTotalPages] = useState(null);

  const { token } = UserObject();
  const [sidebar, setSidebar] = useState(false);

  // This state is used to handle alert
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loadingPage, setloadingPage] = useState(false);

  // set  Table loader on the table parent container
  const [loadingTable, setloadingTable] = useState(false);

  const [branchData, setBranchData] = useState(null);
  const [showTab, setShowTab] = useState({
    departmentRecord: true,
    createDepartment: false,
    thrash: false,
  });
  const [limit, setLimit] = useState(10);
  const [sort, setSort] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1);
  const [initialRender, setInitialRender] = useState(true);

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
    handleGetbranch({
      token,
      setErrorMessage,
      setSuccessMessage,
      setloadingTable,
      setloadingPage,
      setBranchData,
      setTotalPages,
      setPageIndex,
      page,
      limit,
      sort,
    });
  };

  //   This functionality runs when the limit changes
  useEffect(() => {
    const getPaginationLimit = () => {
      let page = currentPage;
      handleGetbranch({
        token,
        setErrorMessage,
        setSuccessMessage,
        setloadingTable,
        setloadingPage,
        setBranchData,
        setTotalPages,
        setPageIndex,
        page,
        limit,
        sort,
      });
    };
    !initialRender && getPaginationLimit();
  }, [limit]);

  //   This functionality runs when newest to oldest or oldest to newest changes
  useEffect(() => {
    const getMostRecentData = () => {
      let page = currentPage;
      handleGetbranch({
        token,
        setErrorMessage,
        setSuccessMessage,
        setloadingTable,
        setloadingPage,
        setBranchData,
        setTotalPages,
        setPageIndex,
        page,
        limit,
        sort,
      });
    };
    !initialRender && getMostRecentData();
  }, [sort]);

  //   This functionality runs for the first time to get all branch
  useEffect(() => {
    handleGetbranch({
      token,
      setErrorMessage,
      setSuccessMessage,
      setloadingPage,
      setloadingTable,
      setBranchData,
      setTotalPages,
      setPageIndex,
      sort,
    });
    setInitialRender(false);
  }, []);

  // This functionality thrash a branch
  const thrashBranch = (thrashBranchId) => {
    handleThrashBranchData({
      token,
      refreshData,
      currentPage,
      thrashBranchId,
    });
  };

  //  Functionality that hides and show tabs
  const toggleTab = (id) => {
    const newObj = { ...showTab };
    Object.keys(newObj).forEach((item) => (newObj[item] = false));
    newObj[id] = true;
    setShowTab(newObj);
  };

  //functionality that set limit for pagination
  const handleSelectedLimit4Pagination = (e) => {
    setLimit(e.target.value);
  };

  //functionality that handles sort by recent files
  const handleSortByMostRecentData = (e) => {
    setSort(e.target.value);
  };

  // The modal to update a branch data starts here
  const modalRef = useRef(); //was not used
  const [toggleModalContainer, settoggleModalContainer] = useState(false);
  const [selectedBranch, setselectedBranch] = useState("");
  const [branchId, setbranchId] = useState("");

  // This functionality show the modal
  const showEditModal = (item) => {
    settoggleModalContainer(!toggleModalContainer);
    setselectedBranch(item.branch);
    setbranchId(item._id);
  };

  // This functionality close the modal
  const closeEditModal = () => {
    settoggleModalContainer(!toggleModalContainer);
  };

  // The modal to update a branch data end here

  // sweet alert functionality starts here
  const sweetAlertFunctionality = (item) => {
    confirmAlert({
      title: "Move to Thrash",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            console.log(item);
            selectBranchId2Thrash(item);
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

  // This functionality select the id of the modal to thrash
  const selectBranchId2Thrash = (item) => {
    thrashBranch(item._id);
  };

  // for the checkbox
  const [selectedCheckboxes, setselectedCheckboxes] = useState([]);

  // This functionality handles the checkboxes
  const handleSelectedCheckboxes = (event) => {
    // check if the checkbox is already in the array then filter it out
    if (selectedCheckboxes.includes(event.target.value)) {
      // using array.splice method
      const index = selectedCheckboxes.indexOf(event.target.value);
      setselectedCheckboxes([
        ...selectedCheckboxes.splice(0, index),
        ...selectedCheckboxes.splice(index + 1),
      ]);
      return;

      // using array.filter method
      // const filteredSelectedCheckboxes = selectedCheckboxes.filter(
      //   (item) => item !== event.target.value
      // );
      // setselectedCheckboxes(filteredSelectedCheckboxes);
      // return;
    }

    setselectedCheckboxes([...selectedCheckboxes, event.target.value]);
  };

  return (
    <div className={styles.branchParentDiv}>
      <Navbar sidebar={sidebar} setSidebar={setSidebar} />
      <div
        className={`${styles.branchContentDiv} ${sidebar && styles.active} `}
      >
        {loadingPage ? (
          <MLoader />
        ) : (
          <div className={styles.branchPageDiv}>
            {/*Modal for closing and opening branch starts here  */}
            <EditBranch
              toggleModalContainer={toggleModalContainer}
              closeEditModal={closeEditModal}
              selectedBranch={selectedBranch}
              setselectedBranch={setselectedBranch}
              branchId={branchId}
              refreshData={refreshData}
              currentPage={currentPage}
            />
            {/*Modal for closing and opening branch end here  */}

            <div className={styles.branchMenu}>
              <div className={styles.branchMenuContent}>
                <div className={styles.branchText}>
                  <h4>DEPARTMENT</h4>
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
            <div className={styles.tabParentDiv}>
              <div className={styles.tabItemDiv}>
                <button
                  onClick={() => toggleTab("departmentRecord")}
                  style={{
                    color: showTab.departmentRecord && "#7cc3c1",
                    backgroundColor: showTab.departmentRecord && "#fff",
                    fontWeight: "bold",
                  }}
                >
                  Department Records
                </button>
                <button
                  onClick={() => toggleTab("createDepartment")}
                  style={{
                    color: showTab.createDepartment && "#7cc3c1",
                    backgroundColor: showTab.createDepartment && "#fff",
                    fontWeight: "bold",
                  }}
                >
                  Create Department
                </button>
                <button
                  onClick={() => toggleTab("thrash")}
                  style={{
                    color: showTab.thrash && "#7cc3c1",
                    backgroundColor: showTab.thrash && "#fff",
                    fontWeight: "bold",
                  }}
                >
                  Thrash
                </button>
              </div>
            </div>
            {showTab.departmentRecord && (
              <div div className={styles.sortParentDiv}>
                {!selectedCheckboxes.length ? (
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
                ) : (
                  <div className={styles.sortContentDiv}>
                    <button>
                      {selectedCheckboxes.length > 1 ? "Thrash all" : "Thrash"}
                    </button>
                  </div>
                )}
              </div>
            )}
            {showTab.departmentRecord && (
              <>
                <div className={styles.branchTableParentDiv}>
                  <div className={styles.branchTableCont}>
                    {branchData && !loadingTable ? (
                      <>
                        <Table
                          headerData={[
                            "Checkbox",
                            "S/N",
                            "Branch",
                            "Date and time",
                            "Thrash",
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
                          ]}
                        >
                          <TableBody>
                            {branchData.map((item, index) => {
                              return (
                                <TableRow
                                  key={index}
                                  rowData={[
                                    {
                                      text: (
                                        <input
                                          type="checkbox"
                                          id={item._id}
                                          value={item._id}
                                          style={{ cursor: "pointer" }}
                                          onChange={(event) => {
                                            handleSelectedCheckboxes(event);
                                          }}
                                        />
                                      ),
                                      styles: {
                                        width: "5%",
                                      },
                                    },
                                    {
                                      text: `${index + 1}`,
                                      styles: { width: "5%" },
                                    },

                                    {
                                      onClick: () => {
                                        showEditModal(item);
                                      },
                                      text: <Link to="#">{item.branch}</Link>,
                                      styles: {
                                        width: "20%",
                                        cursor: "pointer",
                                      },
                                      className: "tableLinks",
                                    },
                                    {
                                      text: `${dayjs(item.createdAt).format(
                                        "llll"
                                      )}`,
                                      styles: { width: "20%" },
                                    },
                                    {
                                      onClick: () => {
                                        sweetAlertFunctionality(item);
                                      },
                                      text: <AiIcons.AiFillDelete />,
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
            )}

            {showTab.createDepartment && (
              <div>
                <CreateBranch />
              </div>
            )}

            {showTab.thrash && (
              <div>
                <Thrash
                  token={token}
                  branchrefreshData={refreshData}
                  branchcurrentPage={currentPage}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Branch;
