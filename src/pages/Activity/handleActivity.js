import { Request } from "../../helpers/request.js";
import { toast } from "react-toastify";

export const handleGetActivity = async function ({
  token,
  setErrorMessage,
  setSuccessMessage,
  setloadingPage,
  setloadingTable,
  setActivityData,
  setTotalPages,
  setPageIndex,
  page,
}) {
  setErrorMessage(false);
  setSuccessMessage(false);
  setloadingTable(true);
  if (!page) setloadingPage(true);

  try {
    const request = new Request("activity");
    const getAllActivity = await request.getAllActivity(token, page);

    if (!getAllActivity.status) {
      setErrorMessage(getAllActivity.message);
      setSuccessMessage(false);
      setloadingPage(false);
      return;
    }

    setErrorMessage(false);
    setloadingPage(false);
    setloadingTable(false);
    setTotalPages(getAllActivity.totalPages);
    setPageIndex(getAllActivity.currentPage);
    setActivityData(getAllActivity.data);

    console.log(getAllActivity.data);
  } catch (error) {
    console.log(error);
  }
};
