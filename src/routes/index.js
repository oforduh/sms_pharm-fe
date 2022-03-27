import React from "react";
import { Switch, Route } from "react-router-dom";

import routes from "./routes";
import AuthRoute from "./authRoutes";
import ProtectedRoute from "./protectedRoutes";
import PublicRoute from "./publicRoutes";

const getRouteType = ({ element, type }) => {
  const routeType = {
    authenticated: <AuthRoute>{element}</AuthRoute>,
    protected: <ProtectedRoute>{element}</ProtectedRoute>,
    public: <PublicRoute>{element}</PublicRoute>,
  };

  // returns the value of the key
  return routeType[type];
};

function AppRoutes() {
  return (
    <Switch>
      {routes.map(({ element, type, path }, idx) => {
        return (
          <Route
            path={path}
            key={idx}
            exact
            // element={getRouteType({ element, type })}
            render={() => getRouteType({ element, type })}
          />
        );
      })}
    </Switch>
  );
}

export default AppRoutes;
