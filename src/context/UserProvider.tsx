import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { Roles } from "../types/Roles";
import {
  useClaimValue,
  useSessionContext,
} from "supertokens-auth-react/recipe/session";
import { UserRoleClaim } from "supertokens-auth-react/recipe/userroles";
import { getApiUrl, API } from "@scottbenton/apps-config";
import Session from "supertokens-auth-react/recipe/session";

export function UserProvider(props: PropsWithChildren) {
  const { children } = props;

  const [email, setEmail] = useState<string>();

  const session = useSessionContext();
  const claimValue = useClaimValue(UserRoleClaim);
  let roles: Record<Roles, boolean> | undefined = undefined;

  if (!claimValue.loading) {
    if (!claimValue.value) {
      roles = {
        [Roles.Developer]: false,
        [Roles.Admin]: false,
      };
    } else {
      roles = {
        [Roles.Developer]:
          claimValue.value.findIndex((role) => role === Roles.Developer) >= 0,
        [Roles.Admin]:
          claimValue.value.findIndex((role) => role === Roles.Admin) >= 0,
      };
    }
  }

  const isSessionLoading = session.loading;
  const hasSession = !session.loading && session.doesSessionExist;

  useEffect(() => {
    if (hasSession) {
      fetch(`${getApiUrl(API.Auth)}/user/current`)
        .then(async (resp) => {
          const data = await resp.json();
          setEmail(data.email);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [hasSession]);

  const getAccessToken = useCallback(() => {
    return new Promise<string | undefined>((resolve, reject) => {
      Session.getAccessToken()
        .then((token) => {
          resolve(token);
        })
        .catch(reject);
    });
  }, []);

  return (
    <UserContext.Provider
      value={
        isSessionLoading
          ? { loading: true, getAccessToken }
          : {
              loading: false,
              user: session.userId
                ? {
                    uid: session.userId,
                    roles,
                    email,
                  }
                : undefined,
              getAccessToken,
            }
      }
    >
      {children}
    </UserContext.Provider>
  );
}
