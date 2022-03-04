import { Request } from "../../helpers/request.js";
import { toast } from "react-toastify";

export const handleGetActivity = async function ({
  token,
  setErrorMessage,
  setSuccessMessage,
  setMiniLoader,
  setActivityData,
}) {
  setMiniLoader(true);
  setErrorMessage(false);
  setSuccessMessage(false);

  try {
    const request = new Request("activity");
    const getAllActivity = await request.getAllActivity(token);
    setMiniLoader(false);
    if (!getAllActivity.status) {
      setErrorMessage(getAllActivity.message);
      setSuccessMessage(false);
    }
    if (getAllActivity.status) {
      setErrorMessage(false);
      setSuccessMessage("Fetched activity logs");
      setActivityData(getAllActivity.data);
    }
  } catch (error) {
    console.log(error);
  }
};
