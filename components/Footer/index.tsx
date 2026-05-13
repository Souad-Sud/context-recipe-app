import Logo from "../Logo";
import "./footer.scss";
import Navigation from "../Navigation";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__navigation">
        <Logo />
        <Navigation />
      </div>
      <div className="footer__copyright">
        <h3>© 2024 Souad Taki - All rights reserved</h3>
      </div>
    </footer>
  );
};

export default Footer;
