import { useMemo } from "react";

export default () => {
  function resetState() {}

  function login() {}

  function signUp() {}

  return useMemo(
    () => ({
      resetState,
      login,
      signUp,
    }),
    []
  );
};
