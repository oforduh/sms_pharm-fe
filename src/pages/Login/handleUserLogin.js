import { Request } from "../../helpers/request";
export const handleUserLogin = async function ({
  e,
  email,
  password,
  setErrorMessage,
  setSigningMessage,
  setIsLoggedIn,
  setIsSigningIn,
  setIsLoading,
}) {
  setIsLoading(true);
  e.preventDefault();
  setSigningMessage(true);
  setIsSigningIn(true);
  setErrorMessage(null);

  const request = new Request("login");
  const login = await request.login(email, password);
  setIsLoading(false);
  if (!login.status) {
    setErrorMessage(login.message);
    setSigningMessage(false);
  }

  if (login.status) {
    setIsLoggedIn(`Login successful`);
    setSigningMessage(false);
    setIsSigningIn(false);
    setTimeout(() => {
      window.location.replace("/");
    }, 3000);
  }
};
