import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            Built with
            <FontAwesomeIcon
                icon={faHeart}
                className="footer-icon"
                aria-hidden="true"
            />
            by
            <a href="https://aryakdeshpande.com/" target="_blank" rel="noreferrer">
                Aryak
            </a>
        </footer>
    );
}

export default Footer;