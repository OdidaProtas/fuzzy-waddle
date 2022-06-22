import "./App.css";
import AppSnackBar from "./features/snackbar";
import AppNavigation from "./navigation/AppNavigation";
import routes from "./navigation/routes";

export default () => (
  <>
    <AppSnackBar />
    <AppNavigation options={routes} />
  </>
);
