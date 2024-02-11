let hasInitialized = false;
import SuperTokens from "supertokens-auth-react";
import { superTokensConfig } from "./superTokens.config";

export function initAuth() {
  if (!hasInitialized) {
    hasInitialized = true;

    SuperTokens.init(superTokensConfig);
  }
}
