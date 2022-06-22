import { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import Fallback from "./Fallback";

export default ({ children }) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Fallback />}>{children}</Suspense>;
    </ErrorBoundary>
  );
};
