"use client";

import "./profileContent.scss";
import Image from "next/image";

import { useUserContext } from "@/context/UserName";
import { validUsers } from "@/data/user";

const ProfileContent = () => {
  const { savedUserName } = useUserContext();

  const currentUser = validUsers.find((user) => user.name === savedUserName);

  return (
    <section className="profilePage">
      <div className="profilePage__container">
        <h1 className="profilePage__name">Welcome {savedUserName}</h1>

        <hr />

        <div className="profilePage__items">
          <div className="profilePage__imgContainer">
            {currentUser && (
              <Image
                alt="profile image"
                height={200}
                width={200}
                className="profilePage__image"
                src={currentUser.image}
              />
            )}
          </div>

          <div className="profilePage__btns">
            <button className="profilePage__btndelete">Delete Profile</button>

            <button className="profilePage__btndisconnect">Disconnect</button>
          </div>
        </div>

        <hr />

        <p>
          <strong>Description:</strong> {currentUser?.description}
        </p>

        <hr />

        <div className="profilePage__favoritesSection">
          <h3 className="profilePage__favoritesTitle">Favorite Recipes</h3>
        </div>
      </div>
    </section>
  );
};

export default ProfileContent;
