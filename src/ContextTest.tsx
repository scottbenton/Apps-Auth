import React from "react";
import { useCurrentUser } from "./context/useCurrentUser";

export function ContextTest() {
  const { loading, user } = useCurrentUser();

  console.debug(loading, user);
  return <></>;
}
