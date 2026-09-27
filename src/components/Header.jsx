import '../styles/Header.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/LOGO.png';

function Header() {
    return (
        <header className="header">
            <img src={Logo} alt="Kasa" />

            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A Propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;