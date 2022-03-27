import { Request } from "../../helpers/request.js";

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
