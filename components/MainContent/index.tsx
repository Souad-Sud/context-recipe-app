import Image from "next/image";
import "./mainContent.scss";
const MainContent = () => {
  return (
    <div className="mainInfo">
      <div className="mainInfo__imgContainer">
        <Image src="/MainImage/bgimg1.jpg" alt="" height={400} width={400} />
      </div>
      <div className="mainInfo__introContainer">
        <span className="mainInfo__introspan">85% would like this again</span>
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
