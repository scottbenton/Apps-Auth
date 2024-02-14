import { useContext } from "react";
import { UserContext } from "./UserContext";

export function useCurrentUser() {
  return useContext(UserContext);
}
