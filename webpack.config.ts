import { constructModuleWebpackConfig } from "@scottbenton/apps-build";
import { ModuleScope } from "@scottbenton/apps-config";

const config = constructModuleWebpackConfig(
  {
    name: ModuleScope.Authentication,
    dependencies: {},
    exposes: {
      "./AuthProvider": "./src/AuthProvider.tsx",
      "./useCurrentUser": "./src/context/useCurrentUser",
      "./roles": "./types/Roles",
      "./authRoutes": "./src/authRoutes.ts",
      "./SessionBlocker": "./src/components/SessionBlocker.tsx",
    },
  },
  true
);

export default config;
