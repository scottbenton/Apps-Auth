import { RouteObject } from "react-router-dom";
import * as reactRouter from "react-router-dom";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import { PreBuiltUIList } from "./config/superTokens.config";
import { initAuth } from "./config/initSuperTokens";
import "./index.scss";

initAuth();

const superTokensRoutes = getSuperTokensRoutesForReactRouterDom(
  reactRouter,
  PreBuiltUIList
);

const authRoutes: RouteObject[] = superTokensRoutes.map(
  (element) => element.props
);

export default authRoutes;
