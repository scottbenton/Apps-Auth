import { PropsWithChildren } from "react";
import { SuperTokensWrapper } from "supertokens-auth-react";
import { initAuth } from "./config/initSuperTokens";
import { UserProvider } from "./context/UserProvider";

initAuth();

export default function AuthProvider(props: PropsWithChildren) {
  const { children } = props;

  return (
    <SuperTokensWrapper>
      <UserProvider>{children}</UserProvider>
    </SuperTokensWrapper>
  );
}
