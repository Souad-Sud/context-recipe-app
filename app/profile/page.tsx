"use client";

import ProfileContent from "@/components/ProfileContent";
import { useUserContext } from "@/context/UserName";

const ProfilePage = () => {
  const { savedUserName } = useUserContext();

  return (
    <div>
      {savedUserName ? (
        <ProfileContent />
      ) : (
        <h1>No user logged in</h1>
      )}
    </div>
  );
};

export default ProfilePage;