import React, { PropsWithChildren } from "react";
import { SuperTokensWrapper } from "supertokens-auth-react";
import { initAuth } from "./config/initSuperTokens";

initAuth();

export default function AuthProvider(props: PropsWithChildren) {
  const { children } = props;

  return <SuperTokensWrapper>{children}</SuperTokensWrapper>;
}
