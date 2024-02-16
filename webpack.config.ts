import { constructModuleWebpackConfig } from "@scottbenton/apps-build";
import { ModuleScope } from "@scottbenton/apps-config";
import { dependencies } from "./package.json";

const config = constructModuleWebpackConfig({
  name: ModuleScope.Authentication,
  dependencies,
  exposes: {
    "./AuthProvider": "./src/AuthProvider.tsx",
    "./authRoutes": "./src/authRoutes.ts",
    "./useCurrentUser": "./src/context/useCurrentUser.ts",
    "./roles": "./src/types/Roles.ts",
    "./SessionBlocker": "./src/components/SessionBlocker.tsx",
  },
});

export default config;
