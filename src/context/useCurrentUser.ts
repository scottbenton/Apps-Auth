import { useContext } from "react";
import { UserContext } from "@scottbenton/apps-config";

export function useCurrentUser() {
  return useContext(UserContext);
}
