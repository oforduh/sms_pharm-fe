import jwt from "jsonwebtoken";
import useSWR from "swr";
import { toast } from "react-toastify";
import { createContext, useContext, useState, useEffect } from "react";
import { config } from "../Config";

// create a context and export it
// step 1
export const UserContext = createContext();

export const UserObject = () => {
  const [user, setUser, token, setToken] = useContext(UserContext);
  return { user, setUser, token, setToken };
};

const getToken = sessionStorage.getItem("token");
const getUserProfile = JSON.parse(sessionStorage.getItem("userProfile"));

//step 2
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [token, setToken] = useState(undefined);

  useEffect(() => {
    setToken(getToken);
    setUser(getUserProfile);

    // functionality that checks if a token has expired
    // decode the token using jwt.decode
    const decoded = jwt.decode(getToken, process.env.REACT_APP_JWT_SECRETE);
    if (decoded) {
      let time = Date.now() - decoded.exp * 1000;
      time = time / 60000;
      if (time >= 0) {
        toast.error("Session has Expired");
        sessionStorage.clear();
        setUser(null);
        setToken(null);
      }
    }
  }, []);

  const requestConfig = {
    headers: {
      Authorization: `Bearer ${getToken}`,
    },
  };
  const fetcher = async (url) => fetch(url, requestConfig);

  const { data, error } = useSWR(
    `${config.baseUrl}/api/auth/user/token_checker`,
    fetcher,
    { refreshInterval: 60000 }
  );

  if (error) {
    console.log(error);
  } else {
    data?.json().then((res) => {
      if (res.data >= -5) {
        toast.warn(
          `session would expire in ${Math.floor(Math.abs(res.data))} minutes `
        );
      }
    });
  }

  //step 3
  return (
    <UserContext.Provider value={[user, setUser, token, setToken]}>
      {user === undefined ? null : children}
    </UserContext.Provider>
  );
};
