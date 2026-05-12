"use client";

import { useUserContext } from "@/context/UserName";
import LoginForm from "../LoginForm";

const LoginFormWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { savedUserName } = useUserContext();

  // not logged in
  if (!savedUserName) {
    return <LoginForm />;
  }

  // logged in
  return <>{children}</>;
};

export default LoginFormWrapper;