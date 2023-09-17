import '../../styles/components/Header/Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../images/icons/logo.svg';
import { NavBarItem } from '../NavBarItem';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="header__navigation nav">
        <Link to="/home" className="logo__link">
          <img
            src={logo}
            alt="logo"
            className="nav__logo"
          />
        </Link>

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
        </ul>
      </nav>

      <div className="header__actions">
        <NavBarItem to="favourites" type="fav" />
        <NavBarItem to="cart" type="cart" />
      </div>
    </header>
  );
};
