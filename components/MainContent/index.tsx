"use client";
import Image from "next/image";
import "./mainContent.scss";
import { useUserContext } from "@/context/UserName";

const MainContent = () => {
  const { savedUserName } = useUserContext();
  return (
    <div className="mainInfo">
      <div className="mainInfo__imgContainer">
        <Image src="/MainImage/bgimg1.jpg" alt="" height={400} width={400} />
      </div>
      <div className="mainInfo__introContainer">
        <span className="mainInfo__introspan">Welcome {savedUserName} to </span>
        <h1 className="mainInfo__title">Mighty Super Cheesecake</h1>
        <p className="mainInfo__introDescription">
          Look no firther for a creamy and ultra smooth classic Cheesecake
          recipe! no one can deny simple decadence
        </p>
      </div>
    </div>
  );
};
export default MainContent;
