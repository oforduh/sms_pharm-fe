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
