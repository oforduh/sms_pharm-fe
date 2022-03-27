import { Request } from "../../helpers/request.js";
import { toast } from "react-toastify";
import {
  ref,
  uploadBytes,
  storage,
  getDownloadURL,
} from "../../firebase/config.js";

export const handleUpdateUserProfile = async function ({
  e,
  state,
  setUpdatingMessageProfile,
  token,
  setErrorMessage,
  setSuccessMessage,
  imageFile,
  setUser,
}) {
  e.preventDefault();
  setUpdatingMessageProfile(true);
  setErrorMessage(false);
  setSuccessMessage(false);

  try {
    const keys = Object.keys(state);
    const values = Object.values(state);
    if (imageFile) {
      // Create a folder for saving the files
      const imageRef = ref(storage, `user-profile-images/${imageFile.name}`);

      // this function allows us to upload the file
      const firebaseImageUpload = await uploadBytes(imageRef, imageFile);

      // This function get the download link
      const uploadUrl = await getDownloadURL(firebaseImageUpload.ref);

      const obj = { avatar: uploadUrl };
      values.map((item, idx) => {
        if (item) {
          obj[keys[idx]] = item;
        }
        return obj;
      });

      const request = new Request("user/me/edit");
      const updateUserProfile = await request.updateUserProfile(
        obj,
        token,
        setUser
      );
      setUpdatingMessageProfile(false);
      if (!updateUserProfile.status) {
        setErrorMessage(updateUserProfile.message);
        setSuccessMessage(false);
      }
      if (updateUserProfile.status) {
        setErrorMessage(false);
        setSuccessMessage("Update Successful");

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    }

    const obj = {};
    // loop through the values and get it's correspondng key if it is true
    values.map((item, idx) => {
      if (item) {
        obj[keys[idx]] = item;
      }
      return obj;
    });

    const request = new Request("user/me/edit");
    const updateUserProfile = await request.updateUserProfile(
      obj,
      token,
      setUser
    );
    setUpdatingMessageProfile(false);
    if (!updateUserProfile.status) {
      setErrorMessage(updateUserProfile.message);
      setSuccessMessage(false);
    }
    if (updateUserProfile.status) {
      setErrorMessage(false);
      setSuccessMessage("Update Successful");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  } catch (error) {
    console.log(error);
  }
};

export const handleUpdateUserPassword = async function ({
  e,
  state,
  setUpdatingMessagePassword,
  token,
  setErrorMessage,
  setSuccessMessage,
}) {
  e.preventDefault();
  setUpdatingMessagePassword(true);
  setErrorMessage(false);
  setSuccessMessage(false);

  try {
    if (state.new_password !== state.confirm_new_password) {
      toast.error("New password should be the same as confirm password ");
      setUpdatingMessagePassword(false);
      return;
    }

    const keys = Object.keys(state);
    const values = Object.values(state);
    const obj = {};

    values.map((item, index) => {
      if (item) {
        obj[keys[index]] = item;
      }
      return obj;
    });

    const request = new Request("changePassword");
    const updateUserPassword = await request.updateUserPassword(obj, token);
    setUpdatingMessagePassword(false);
    if (!updateUserPassword.status) {
      setErrorMessage(updateUserPassword.message);
      setSuccessMessage(false);
    }
    if (updateUserPassword.status) {
      setErrorMessage(false);
      setSuccessMessage("Password has been updated successful");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  } catch (error) {
    console.log(error);
  }
};

export const handleDeleteUserAccount = async function ({
  token,
  setupdatingMessageRemoveAccount,
  setErrorMessage,
  setSuccessMessage,
}) {
  setupdatingMessageRemoveAccount(true);
  setErrorMessage(false);
  setSuccessMessage(false);
  try {
    const request = new Request("user/me");
    const deleteUserAccount = await request.deleteUserAccount(token);
    setupdatingMessageRemoveAccount(false);
    if (!deleteUserAccount.status) {
      setErrorMessage(deleteUserAccount.message);
      setSuccessMessage(false);
    }
    if (deleteUserAccount.status) {
      setErrorMessage(false);
      setSuccessMessage("Account has been deleted");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  } catch (error) {
    console.log(error);
  }
};

export const handleDeleteUserAvatar = async function ({
  token,
  setUpdatingMessageDeleteUser,
  setErrorMessage,
  setSuccessMessage,
}) {
  setUpdatingMessageDeleteUser(true);
  setErrorMessage(false);
  setSuccessMessage(false);
  try {
    const request = new Request("user/me/avatar");
    const deleteUserAccount = await request.deleteUserAvatar(token);
    setUpdatingMessageDeleteUser(false);
    if (!deleteUserAccount.status) {
      setErrorMessage(deleteUserAccount.message);
      setSuccessMessage(false);
    }
    if (deleteUserAccount.status) {
      setErrorMessage(false);
      setSuccessMessage("Avatar has been deleted");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  } catch (error) {
    console.log(error);
  }
};

export const handleTerminateSession = async function ({
  token,
  setTerminatingSessionMessage,
  setErrorMessage,
  setSuccessMessage,
}) {
  setTerminatingSessionMessage(true);
  setErrorMessage(false);
  setSuccessMessage(false);
  try {
    const request = new Request("user/me/session");
    const terminateSession = await request.terminateSession(token);
    setTerminatingSessionMessage(false);
    console.log("non");
    if (!terminateSession.status) {
      console.log("Failure");
      setErrorMessage(terminateSession.message);
      setSuccessMessage(false);
    }
    if (terminateSession.status) {
      console.log("success");
      setErrorMessage(false);
      setSuccessMessage(terminateSession.message);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  } catch (error) {
    console.log(error);
  }
};
