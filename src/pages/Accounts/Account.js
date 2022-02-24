import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./accounts.module.scss";
import { UserObject } from "../../context/User.js";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import { toast } from "react-toastify";
import MLoader from "./miniLoader/mLoader.js";

import dummyImage from "./user.png";
import {
  handleUpdateUserProfile,
  handleUpdateUserPassword,
  handleDeleteUserAccount,
} from "./handleUpdateUserProfile.js";

// To format Date
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

const Account = () => {
  // getting the user profile from context
  const { user, setUser, token } = UserObject();

  // This state is used to handle alert
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

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

  // set the default profile picture
  const [{ alt, src }, setImg] = useState({
    src: user.avatar ? user.avatar : dummyImage,
    alt: "Upload an Image",
  });

  // This function set an image preview and saves the image in a state
  const [imageFile, setimageFile] = useState(null);
  const handleImg = (e) => {
    if (e.target.files[0]) {
      setImg({
        src: URL.createObjectURL(e.target.files[0]),
        alt: e.target.files[0].name,
      });
      setHideIcon(false);
      setimageFile(e.target.files[0]);
    }
  };

  // This functionality delete image preview
  const deleteImgPreview = () => {
    setImg({
      src: user.avatar ? user.avatar : dummyImage,
      alt: "Upload an Image",
    });
    setHideIcon(true);
  };

  // set up the initial value
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [updatingMessageProfile, setUpdatingMessageProfile] = useState(false);
  const [updatingMessagePassword, setUpdatingMessagePassword] = useState(false);
  const [updatingMessageRemoveAccount, setupdatingMessageRemoveAccount] =
    useState(false);
  const [hideIcon, setHideIcon] = useState(true);
  const [old_password, setOld_password] = useState("");
  const [new_password, setNew_password] = useState("");
  const [confirm_new_password, setConfirm_new_password] = useState("");
  const [passwordType, setPasswordType] = useState({
    password1: "password",
    password2: "password",
    password3: "password",
  });

  // This functionality hides and show password
  // const togglePassword = () => {
  //   if (passwordType === "password") {
  //     setPasswordType("text");
  //     return;
  //   }
  //   setPasswordType("password");
  // };

  // This functionality hides and show password
  const togglePassword = (id) => {
    const newObj = { ...passwordType };
    newObj[id] = passwordType[id] === "password" ? "text" : "password";
    setPasswordType(newObj);
  };

  // This is use to set the sidebar
  const [sidebar, setSidebar] = useState(false);
  return (
    <div>
      <div className={styles.accountParentDiv}>
        <Navbar sidebar={sidebar} setSidebar={setSidebar} />
        <div
          className={`${styles.accountContentDiv} ${sidebar && styles.active} `}
        >
          <div className={styles.ManageAccountContainer}>
            <div className={styles.linkParentDiv}>
              <div className={styles.linkContentDiv}>
                <div className={styles.sectionHeader}>Manage Accounts</div>
              </div>
            </div>
            <div className={styles.profileParentDiv}>
              <div className={styles.profileContentDiv}>
                <div>
                  <div className={styles.sectionHeader}> Profile </div>
                  <p className={styles.textCustomizer}>
                    Your email address is your identity on sms pharm and is used
                    to log in.
                  </p>
                </div>
                <div>
                  <div
                    className={`${styles.sectionHeader} ${styles.editProfileText}`}
                  >
                    Edit Profile{" "}
                  </div>
                  <div className={styles.profileForm}>
                    <div className={styles.imageContainer}>
                      <div className={styles.imageContent}>
                        <img src={src} alt={alt} />

                        {/* This functionality toggles between uploading an image and deleting an image */}
                        {!hideIcon ? (
                          <button
                            className={`${styles.iconUploader} ${styles.deleteImagePreview} ${styles.hide}`}
                            onClick={deleteImgPreview}
                          >
                            <AiIcons.AiTwotoneDelete />
                          </button>
                        ) : (
                          <label className={styles.iconUploader}>
                            <FiIcons.FiEdit2 />
                            <input
                              type="file"
                              accept="image/*"
                              className={styles.hide}
                              onChange={handleImg}
                            />
                          </label>
                        )}
                      </div>
                    </div>
                    <form
                      onSubmit={(e) => {
                        handleUpdateUserProfile({
                          e,
                          state: { fName, lName, phone, age },
                          token,
                          setUpdatingMessageProfile,
                          setErrorMessage,
                          setSuccessMessage,
                          imageFile,
                          setUser,
                        });
                      }}
                    >
                      {updatingMessageProfile && (
                        <small className={styles.signingMessage}>
                          Update Profile...
                        </small>
                      )}
                      <div className={styles.splitInputField}>
                        <div className={styles.formGroup}>
                          <label>First Name</label>
                          <input
                            type="text"
                            className={styles.formControl}
                            placeholder={user.fName ? user.fName : ""}
                            value={fName}
                            onChange={(event) => {
                              setFName(event.target.value);
                            }}
                          />
                        </div>

                        <div className={styles.formGroup}>
                          <label>Last Name</label>
                          <input
                            type="text"
                            className={styles.formControl}
                            placeholder={user.lName ? user.lName : ""}
                            value={lName}
                            onChange={(event) => {
                              setLName(event.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <div className={styles.formGroup}>
                        <label>Email Address</label>
                        <input
                          type="email"
                          className={styles.formControl}
                          placeholder={user.email ? user.email : ""}
                          disabled
                        />
                      </div>

                      <div className={styles.splitInputField}>
                        <div className={styles.formGroup}>
                          <label>Phone Number</label>
                          <input
                            type="text"
                            className={styles.formControl}
                            placeholder={user.phone ? user.phone : ""}
                            value={phone}
                            onChange={(event) => {
                              setPhone(event.target.value);
                            }}
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label>Age (Optional)</label>
                          <input
                            type="number"
                            className={styles.formControl}
                            placeholder={user.age ? user.age : ""}
                            value={age}
                            onChange={(event) => {
                              setAge(event.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <button
                        style={{ opacity: updatingMessageProfile && 0.5 }}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
                <div className={styles.dummySpace}></div>
              </div>
            </div>
            <div className={styles.passwordParentDiv}>
              <div className={styles.passwordContentDiv}>
                <div>
                  <div className={styles.sectionHeader}> Password </div>
                  <p className={styles.textCustomizer}>
                    This allows you to set a new password
                  </p>
                </div>
                <div>
                  <div
                    className={`${styles.sectionHeader} ${styles.editProfileText}`}
                  >
                    Change Password
                  </div>
                  <div className={styles.passwordForm}>
                    <form
                      onSubmit={(e) => {
                        handleUpdateUserPassword({
                          e,
                          state: {
                            old_password,
                            new_password,
                            confirm_new_password,
                          },
                          token,
                          setUpdatingMessagePassword,
                          setErrorMessage,
                          setSuccessMessage,
                        });
                      }}
                    >
                      {updatingMessagePassword && (
                        <small className={styles.signingMessage}>
                          Updating Password...
                        </small>
                      )}
                      <div className={styles.formGroup}>
                        <label>Current Password</label>
                        <div className={styles.inputParentDiv}>
                          <div className={styles.inputParentCont}>
                            <input
                              type={passwordType.password1}
                              className={styles.formControl}
                              required
                              placeholder="******"
                              value={old_password}
                              onChange={(event) => {
                                setOld_password(event.target.value);
                              }}
                            />
                            <div
                              className={styles.eyeIcon}
                              onClick={() => togglePassword("password1")}
                            >
                              {passwordType.password1 === "password" ? (
                                <AiIcons.AiOutlineEyeInvisible />
                              ) : (
                                <AiIcons.AiOutlineEye />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.splitInputField}>
                        <div className={styles.formGroup}>
                          <label>New Password</label>
                          <div className={styles.inputParentDiv}>
                            <div className={styles.inputParentCont}>
                              <input
                                type={passwordType.password2}
                                className={styles.formControl}
                                required
                                placeholder="******"
                                value={new_password}
                                onChange={(event) => {
                                  setNew_password(event.target.value);
                                }}
                              />
                              <div
                                className={styles.eyeIcon2}
                                onClick={() => togglePassword("password2")}
                              >
                                {passwordType.password2 === "password" ? (
                                  <AiIcons.AiOutlineEyeInvisible />
                                ) : (
                                  <AiIcons.AiOutlineEye />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.formGroup}>
                          <label>Confirm New Password</label>
                          <div className={styles.inputParentDiv}>
                            <div className={styles.inputParentCont}>
                              <input
                                type={passwordType.password3}
                                className={styles.formControl}
                                required
                                placeholder="******"
                                value={confirm_new_password}
                                onChange={(event) => {
                                  setConfirm_new_password(event.target.value);
                                }}
                              />
                              <div
                                className={styles.eyeIcon2}
                                onClick={() => togglePassword("password3")}
                              >
                                {passwordType.password3 === "password" ? (
                                  <AiIcons.AiOutlineEyeInvisible />
                                ) : (
                                  <AiIcons.AiOutlineEye />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      <button
                        style={{ opacity: updatingMessagePassword && 0.5 }}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
                <div className={styles.dummySpace}></div>
              </div>
            </div>
            <div className={styles.closeAccountParentDiv}>
              <div className={styles.closeAccountContentDiv}>
                <div>
                  <div className={styles.sectionHeader}> Delete Account </div>
                  <p className={styles.textCustomizer}>
                    <span>Warning:</span> Deleting your account is irreversible.
                  </p>
                </div>

                <div>
                  <button
                    onClick={() =>
                      handleDeleteUserAccount({
                        token,
                        setupdatingMessageRemoveAccount,
                        setErrorMessage,
                        setSuccessMessage,
                      })
                    }
                    style={{ opacity: updatingMessageRemoveAccount && 0.5 }}
                  >
                    Close this account
                  </button>
                </div>
                <div>
                  <span>Time Registered</span>{" "}
                </div>

                <div>{dayjs(user.createdAt).format(`LLLL`)}</div>

                <div className={styles.dummySpace}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
