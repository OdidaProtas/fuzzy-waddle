import { useMemo } from "react";
import AppRoute from "./AppRoute";
import { Switch, useRouteMatch } from "react-router-dom";
import { AppRouteInterface, AppRoutesOptions } from "../types";

export default function AppNavigation({ options }: AppRoutesOptions) {
  const { path } = useRouteMatch();
  const navData = useMemo(() => {
    return options.map((o: AppRouteInterface) => ({
      ...o,
      path: `${path}${o.path}`,
    }));
  }, []);
  return (
    <Switch>
      {navData.map(({ exact, path, auth, Component }) => (
        <AppRoute key={path} auth={auth} exact={exact} path={path}>
          <Component />
        </AppRoute>
      ))}
    </Switch>
  );
}
