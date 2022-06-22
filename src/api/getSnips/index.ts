import { items } from "../mock";

export default () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(items);
    }, 1200);
  });
};
