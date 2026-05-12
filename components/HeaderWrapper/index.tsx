"use client";

import { useUserContext } from "@/context/UserName";

const HeaderWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { savedUserName } = useUserContext();

  // not logged in
  if (!savedUserName) {
    return null;
  }

  // logged in
  return <>{children}</>;
};

export default HeaderWrapper;