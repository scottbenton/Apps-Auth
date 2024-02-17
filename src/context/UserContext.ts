import { createRegisteredContext } from "react-singleton-context";
import { Roles } from "../types/Roles";

export interface IUserContext {
  loading: boolean;
  user?: {
    uid: string;
    email?: string;
    roles?: Record<Roles, boolean>;
  };
}

export const UserContext = createRegisteredContext<IUserContext>(
  "UserContext",
  {
    loading: true,
  }
);
