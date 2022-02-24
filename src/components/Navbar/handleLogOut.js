import { Request } from "../../helpers/request";
export const handleLogOut = async ({
  token,
  setIsLoggedIn,
  setErrorMessage,
  setIsLoggingOut,
  setIsLoading,
}) => {
  setIsLoading(true);
  const request = new Request("logout");
  const logout = await request.logout(token);
  setIsLoading(false);
  setIsLoggingOut(true);
  if (!logout.status) {
    setErrorMessage(logout.message);
  }

  if (logout.status) {
    setIsLoggedIn("Logout is successful");
    setTimeout(() => {
      setIsLoggingOut(false);
      window.location.replace("/login");
    }, 1000);
  }
};
