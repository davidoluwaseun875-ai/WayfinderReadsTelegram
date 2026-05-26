import Logo from "../assets/Logo.png";

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="Wayfinder Reads Logo" className="logo" />
      <h1>Wayfinder Reads</h1>
    </header>
  );
}

export default Header;
