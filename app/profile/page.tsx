"use client";

const ProfilePage = () => {
  const storedUser = localStorage.getItem("loggedUser");

  const user = storedUser
    ? JSON.parse(storedUser)
    : null;

  return (
    <div>
      <h1>Profile Page</h1>

      {user ? (
        <h2>Welcome {user.email}</h2>
      ) : (
        <h2>No user logged in</h2>
      )}
    </div>
  );
};

export default ProfilePage;