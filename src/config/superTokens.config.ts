import ThirdPartyPasswordless from "supertokens-auth-react/recipe/thirdpartypasswordless";
import { ThirdPartyPasswordlessPreBuiltUI } from "supertokens-auth-react/recipe/thirdpartypasswordless/prebuiltui";
import Session from "supertokens-auth-react/recipe/session";
import { SuperTokensConfig } from "supertokens-auth-react/lib/build/types";

export function getApiDomain() {
  const apiPort = process.env.LOCAL_AUTH_API_PORT || 3001;
  const environmentVariableURL = process.env.AUTH_API_URL;

  if (environmentVariableURL) {
    console.debug(environmentVariableURL);
    return environmentVariableURL;
  } else {
    console.debug(apiPort);
    return `http://localhost:${apiPort}`;
  }
}

export function getWebsiteDomain() {
  const websitePort = location.port || 3000;
  const websiteUrl = location.origin || `http://localhost:${websitePort}`;
  return websiteUrl;
}

export const superTokensConfig: SuperTokensConfig = {
  appInfo: {
    appName: "apps.scottbenton.dev",
    apiDomain: getApiDomain(),
    websiteDomain: getWebsiteDomain(),
  },
  // recipeList contains all the modules that you want to
  // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
  recipeList: [
    ThirdPartyPasswordless.init({
      useShadowDom: false,
      signInUpFeature: {
        providers: [
          ThirdPartyPasswordless.Google.init(),
          ThirdPartyPasswordless.Github.init(),
          ThirdPartyPasswordless.Discord.init(),
        ],
      },
      contactMethod: "EMAIL",
    }),
    Session.init(),
  ],
};

export const PreBuiltUIList = [ThirdPartyPasswordlessPreBuiltUI];
