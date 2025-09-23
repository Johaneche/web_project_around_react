import logo from "../../images/header-vector.svg";

function Header() {
  return (
    <div className="page">
      <img className="header__image" src={logo} alt="Carga imagen del header" />
    </div>
  );
}

export default Header;
