import { useMemo } from "react";
import useStateValue from "../state/hooks/useStateValue";

export default (options: any[]) => {
  const { auth } = useStateValue();
  if (!Boolean(options.length)) return true;
  return useMemo(() => {
    const authorized = options.filter((f: any) => {
      return Boolean(auth[f]?.isLoggedIn);
    });
    return Boolean(authorized.length);
  }, [auth]);
};
