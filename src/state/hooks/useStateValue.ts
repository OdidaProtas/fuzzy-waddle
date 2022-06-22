import { useContext, useMemo } from "react";
import { StateContext } from "..";

export default () => {
  const [state] = useContext(StateContext) as any;

  return useMemo(() => state, [state]);
};
