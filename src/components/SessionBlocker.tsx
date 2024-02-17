import React, { PropsWithChildren, ReactNode, useEffect } from "react";
import { Roles } from "@scottbenton/apps-config";
import { useCurrentUser } from "../context/useCurrentUser";
import { useNavigate } from "react-router-dom";

export interface SessionBlockerProps {
  uids?: string[];
  roles?: Roles[];
  redirectTo?: string;
  loadingComponent?: ReactNode;
  accessDeniedComponent?: ReactNode;
}

export function SessionBlocker(props: PropsWithChildren<SessionBlockerProps>) {
  const {
    uids,
    roles,
    redirectTo,
    loadingComponent,
    accessDeniedComponent,
    children,
  } = props;

  const { loading, user } = useCurrentUser();

  const navigate = useNavigate();

  let meetsUIDRequirement = false;
  if (uids && user) {
    meetsUIDRequirement = uids.includes(user.uid);
  } else if (!uids) {
    meetsUIDRequirement = true;
  }

  let meetsRoleRequirement = false;
  if (roles && user) {
    meetsRoleRequirement =
      roles.filter((role) => (user.roles ?? {})[role]).length > 0;
  } else if (!roles) {
    meetsRoleRequirement = true;
  }

  useEffect(() => {
    if (redirectTo && (!meetsRoleRequirement || !meetsRoleRequirement)) {
      navigate(redirectTo);
    }
  }, [meetsUIDRequirement, meetsRoleRequirement, navigate, redirectTo]);

  if (loading || !user) {
    return <>{loadingComponent}</>;
  } else if (meetsUIDRequirement && meetsRoleRequirement) {
    return children;
  } else if (accessDeniedComponent && !redirectTo) {
    return accessDeniedComponent;
  } else {
    return <></>;
  }
}
