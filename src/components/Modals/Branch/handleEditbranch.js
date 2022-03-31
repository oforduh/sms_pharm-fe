import { Request } from "../../../helpers/request";
import { toast } from "react-toastify";
export const handleUpdateBranchData = async function ({
  e,
  state,
  token,
  branchId,
  setupdatingBranchData,
  refreshData,
  currentPage,
  closeEditModal,
}) {
  e.preventDefault();
  setupdatingBranchData(true);

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
    const id = toast.loading("Updating ...");

    const request = new Request(`branch/${branchId}`);
    const updateBranchData = await request.updateBranchData(obj, token);

    if (!updateBranchData.status) {
      setupdatingBranchData(false);
      return toast.update(id, {
        render:
          updateBranchData.message || "An error occurred. Try again later",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
    if (updateBranchData.status) {
      setupdatingBranchData(false);
      toast.update(id, {
        render: "Update successful",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
      refreshData(currentPage);
      closeEditModal();

      //   setTimeout(() => {
      //     window.location.reload();
      //   }, 2000);
    }
  } catch (error) {
    console.log(error);
  }
};
