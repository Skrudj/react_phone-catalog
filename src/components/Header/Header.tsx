import logo from '../../images/logo.svg';
import { NavBarItem } from '../NavBarItem';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="header__navigation nav">
        <a href="home" className="logo__link">
          <img
            src={logo}
            alt="logo"
            className="nav__logo"
          />
        </a>

        <ul className="nav__list">
          <li className="nav__item">
            <NavBarItem
              to="home"
              type="text"
              className="nav__link"
            >
              Home
            </NavBarItem>
          </li>
          <li className="nav__item">
            <NavBarItem
              to="phones"
              type="text"
              className="nav__link"
            >
              Phones
            </NavBarItem>
          </li>
          <li className="nav__item">
            <NavBarItem
              to="tablets"
              type="text"
              className="nav__link"
            >
              Tablets
            </NavBarItem>
          </li>
          <li className="nav__item">
            <NavBarItem
              to="accessories"
              type="text"
              className="nav__link"
            >
              Accessories
            </NavBarItem>
          </li>
          {/* <li className="nav__item">
            <a href="aaa" className="nav__link nav__link--is-active">Home</a>
          </li>
          <li className="nav__item">
            <a href="aaa" className="nav__link">Phones</a>
          </li>
          <li className="nav__item">
            <a href="aaa" className="nav__link">Tablets</a>
          </li>
          <li className="nav__item">
            <a href="aaa" className="nav__link">Accessories</a>
          </li> */}
        </ul>
      </nav>

      <div className="header__actions">
        <NavBarItem to="fav" type="fav">1</NavBarItem>
        <NavBarItem to="cart" type="cart">2</NavBarItem>

        {/* <a href="fav" className="header__fav">some fav</a>

        <a href="cart" className="header__cart">some cart</a> */}
      </div>
    </header>
  );
};