import Logo from "../Logo";
import Navigation from "../Navigation";
import "./header.scss"
const Header = () => {
  return (
    <header className="header">
      <Logo />
      <div>
        <Navigation />
      </div>

    </header>
  );
};
export default Header;
