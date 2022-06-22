import { useContext, useMemo } from "react";
import { StateContext } from "..";

export default () => {
  const [, dispatch] = useContext(StateContext) as any;

  return useMemo(() => dispatch, []);
};
