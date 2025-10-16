import logo from "../../images/header-vector.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__image" src={logo} alt="Carga imagen del header" />
    </header>
  );
}

export default Header;
