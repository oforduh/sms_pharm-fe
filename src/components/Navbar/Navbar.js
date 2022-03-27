import React, { useState, useEffect } from "react";
import { UserObject } from "../../context/User.js";
import { handleLogOut } from "./handleLogOut.js";
import styles from "./navbar.module.scss";
import { toast } from "react-toastify";
import * as FaIcons from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import { SidebarData } from "./Sidebar.js";
import { IsLoadingObject } from "../../context/LoaderContext.js";
import dummyImage from "../../pages/Accounts/user.png";

const Navbar = ({ sidebar, setSidebar }) => {
  const { user, token } = UserObject();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menubars, setMenubars] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { setIsLoading } = IsLoadingObject();

  // set the default profile picture
  const [{ alt, src }] = useState({
    src: user?.avatar ? user.avatar : dummyImage,
    alt: user?.avatar ? "User Avatar" : "Upload an Image",
  });

  // This toggle between opening and closing the dashboard
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const hideMenuBar = () => {
    setMenubars(!menubars);
  };

  //   This function only run when the error message changes
  useEffect(() => {
    if (!errorMessage) return;
    toast.error(errorMessage, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, [errorMessage]);

  //   This function only run when the success message changes
  useEffect(() => {
    if (!isLoggedIn) return;
    toast.success(isLoggedIn, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, [isLoggedIn]);

  return (
    <>
      <div className={`${styles.navbar}`}>
        <Link to="#" className={!menubars ? styles.hidden : styles.menuBars}>
          <FaIcons.FaBars
            onClick={() => {
              showSidebar();
              hideMenuBar();
            }}
          />
        </Link>
      </div>
      <nav
        className={
          !sidebar ? `${styles.navbarMenu} ${styles.active}` : styles.navbarMenu
        }
      >
        <ul className={`${styles.navMenuItems} ${styles.removeList}`}>
          <li className={styles.navbarToggle}>
            <Link to="#" className={styles.MenuBars}>
              <AiIcons.AiOutlineClose
                onClick={() => {
                  showSidebar();
                  hideMenuBar();
                }}
              />
            </Link>
          </li>
          <div className={styles.navContentParent}>
            <div className={styles.navContent}>
              <div className={styles.imageContent}>
                <img src={src} alt={alt} />
              </div>

              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={styles.navText}>
                    <NavLink
                      activeClassName={styles.navTextActive}
                      to={item.path}
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </NavLink>
                  </li>
                );
              })}
              <li className={styles.liContent}>
                <div className={styles.buttonContainer}>
                  <CgIcons.CgLogOut className={styles.buttonIcon} />
                  <button
                    style={{ cursor: isLoggingOut && "not-allowed" }}
                    onClick={() => {
                      handleLogOut({
                        token,
                        setIsLoggedIn,
                        setErrorMessage,
                        setIsLoggingOut,
                        setIsLoading,
                      });
                    }}
                  >
                    Logout
                  </button>
                </div>
              </li>
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
