import { Request } from "../../helpers/request.js";
import { toast } from "react-toastify";

export const handleGetbranch = async function ({
  token,
  setErrorMessage,
  setSuccessMessage,
  setloadingPage,
  setloadingTable,
  setBranchData,
  setTotalPages,
  setPageIndex,
  page,
  limit,
  sort,
}) {
  setErrorMessage(false);
  setSuccessMessage(false);
  setloadingTable(true);
  if (!page) setloadingPage(true);

  try {
    const request = new Request("branch");
    const getAllbranch = await request.getAllBranch(token, page, limit, sort);

    if (!getAllbranch.status) {
      setErrorMessage(getAllbranch.message);
      setSuccessMessage(false);
      setloadingPage(false);
      return;
    }

    setErrorMessage(false);
    setloadingPage(false);
    setloadingTable(false);
    setTotalPages(getAllbranch.totalPages);
    setPageIndex(getAllbranch.currentPage);
    setBranchData(getAllbranch.data);
  } catch (error) {
    console.log(error);
  }
};

export const handleThrashBranchData = async function ({
  token,
  thrashBranchId,
  refreshData,
  currentPage,
}) {
  try {
    const id = toast.loading("Thrashing Data ...");
    const request = new Request(`branch/thrash/${thrashBranchId}`);
    const thrashBranchData = await request.thrashBranchData(token);
    if (!thrashBranchData.status) {
      return toast.update(id, {
        render:
          thrashBranchData.message || "An error occurred. Try again later",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
    if (thrashBranchData.status) {
      toast.update(id, {
        render: "Moved to thrash",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
      refreshData(currentPage);
    }
  } catch (error) {
    console.log(error);
  }
};

export const thrashAllSelectedBranch = async function ({
  state,
  token,
  refreshData,
  currentPage,
}) {
  try {
    const keys = Object.keys(state);
    const values = Object.values(state);
    const obj = {};

    // loop through the values and get it's corresponding key if it is true
    values.map((item, idx) => {
      if (item) {
        obj[keys[idx]] = item;
      }
      return obj;
    });

    const id = toast.loading("Thrashing Data ...");
    const request = new Request(`select/branch/thrash`);
    const thrashSelectedBranchData = await request.thrashSelectedBranchData(
      token,
      obj
    );
    if (!thrashSelectedBranchData.status) {
      return toast.update(id, {
        render:
          thrashSelectedBranchData.message ||
          "An error occurred. Try again later",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
    if (thrashSelectedBranchData.status) {
      toast.update(id, {
        render: "All Moved to thrash",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
      refreshData(currentPage);
    }
  } catch (error) {
    console.log(error);
  }
};
