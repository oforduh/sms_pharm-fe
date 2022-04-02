import { toast } from "react-toastify";
import { Request } from "../../../helpers/request";

export const handleCreateBranchData = async function ({
  e,
  state,
  token,
  setcreateBranchData,
}) {
  e.preventDefault();
  setcreateBranchData(true);

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

    const id = toast.loading("Creating ...");
    const request = new Request(`branch/register`);
    const createBranchData = await request.createBranchData(obj, token);
    if (!createBranchData.status) {
      setcreateBranchData(false);
      return toast.update(id, {
        render:
          createBranchData.message || "An error occurred. Try again later",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
    if (createBranchData.status) {
      setcreateBranchData(false);
      toast.update(id, {
        render: "Branch created successfully ",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  } catch (error) {
    console.log(error);
  }
};
