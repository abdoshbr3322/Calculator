// Import images
import LogoImg from "./logo.png";

function Logo() {
  return <img src={LogoImg} alt="logo" />;
}

function Navbar() {
  return (
    <div className="header py-3 bg-light">
      <div className="container">
        <div className="logo d-flex mx-auto">
          <h1 className="me-2">Calculator</h1>
          <Logo />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
