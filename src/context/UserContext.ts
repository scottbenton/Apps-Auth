import { createContext } from "react";
import { Roles } from "../types/Roles";

export interface IUserContext {
  loading: boolean;
  user?: { uid: string; email?: string; roles?: Record<Roles, boolean> };
}

export const UserContext = createContext<IUserContext>({
  loading: true,
});
