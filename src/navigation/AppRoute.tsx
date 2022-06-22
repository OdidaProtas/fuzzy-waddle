import { Route, Redirect } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default ({ auth, exact, path, children }) => {
  const isAuthorized = useAuth(auth);

  if (isAuthorized)
    return (
      <Route exact={exact} path={path}>
        {children}
      </Route>
    );
  return <Redirect to="/login" />;
};
