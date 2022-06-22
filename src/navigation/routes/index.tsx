import { lazy } from "react";
import Sus from "../../sus";

const HomePage = lazy(() => import("../../pages/Home"));

export default [
  {
    exact: true,
    path: "",
    auth: [],
    Component: (
      <Sus>
        <HomePage />
      </Sus>
    ),
  },
];
