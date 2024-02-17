import React, { PropsWithChildren } from "react";
import { SuperTokensWrapper } from "supertokens-auth-react";
import { initAuth } from "./config/initSuperTokens";
import { UserProvider } from "./context/UserProvider";
import { ContextTest } from "./ContextTest";

initAuth();

export default function AuthProvider(props: PropsWithChildren) {
  const { children } = props;

  return (
    <SuperTokensWrapper>
      <UserProvider>
        <ContextTest />
        {children}
      </UserProvider>
    </SuperTokensWrapper>
  );
}
