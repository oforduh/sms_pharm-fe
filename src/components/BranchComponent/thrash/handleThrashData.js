import { Request } from "../../../helpers/request";
import { toast } from "react-toastify";
export const handleGetThrash = async function ({
  token,
  setErrorMessage,
  setloadingPage,
  setloadingTable,
  setThrashData,
  setTotalPages,
  page,
  limit,
  sort,
}) {
  setloadingTable(true);
  //   if (!page) setloadingPage(true);

  try {
    const request = new Request("branch/thrash");
    const getAllThrash = await request.getAllThrash(token, page, limit, sort);

    if (!getAllThrash.status) {
      setloadingTable(false);
      setErrorMessage(getAllThrash.message);
      return;
    }

    setErrorMessage(false);
    setloadingTable(false);
    setTotalPages(getAllThrash.totalPages);
    setThrashData(getAllThrash.data);
  } catch (error) {
    console.log(error);
  }
};

export const handleDeleteBranchData = async function ({
  token,
  deleteBranchId,
  refreshData,
  currentPage,
}) {
  try {
    const id = toast.loading("Deleting...");
    const request = new Request(`branch/delete/${deleteBranchId}`);
    const deleteBranchData = await request.deleteBranchData(token);
    if (!deleteBranchData.status) {
      return toast.update(id, {
        render:
          deleteBranchData.message || "An error occurred. Try again later",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
    if (deleteBranchData.status) {
      toast.update(id, {
        render: "Deleted",
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

export const handleRestoreBranchData = async function ({
  token,
  restoreBranchId,
  refreshData,
  currentPage,
  branchrefreshData,
  branchcurrentPage,
}) {
  try {
    const id = toast.loading("Restore...");
    const request = new Request(`branch/restore/${restoreBranchId}`);
    const restoreBranchData = await request.restoreBranchData(token);
    if (!restoreBranchData.status) {
      return toast.update(id, {
        render:
          restoreBranchData.message || "An error occurred. Try again later",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
    if (restoreBranchData.status) {
      toast.update(id, {
        render: "Restored",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
      refreshData(currentPage);
      branchrefreshData(branchcurrentPage);
    }
  } catch (error) {
    console.log(error);
  }
};
