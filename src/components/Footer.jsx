import '../styles/Footer.scss';
import LogoFooter from '../assets/logo-footer.png';

function Footer() {
    return (
        <footer className="footer">
            <img src={LogoFooter} alt="Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;  