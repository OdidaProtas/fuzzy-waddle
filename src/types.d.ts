import { ReactNode } from "react";

export interface AppRouteInterface {
  auth: any[];
  exact: boolean;
  path: string;
  children?: any;
  Component?: any;
}

export interface AppRoutesOptions {
  options: AppRouteInterface[];
}
