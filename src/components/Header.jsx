import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faShoppingBasket, faSun, faTags} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {Link, NavLink} from "react-router-dom";

export default function Header() {

    const [theme, setTheme] = useState("light");

    const navLinkClass = "text-center text-lg font-primary font-semibold text-primary py-2";
    const buttonClassName = "flex items-center justify-center mx-3 w-8 h-8 rounded-full border border-primary dark:border-light transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-600";

    /**
     * this function toggles the theme between light and dark modes
     * setTheme provides the previous theme value as an argument to the callback function
     */
    function toggleTheme() {
        setTheme(prevTheme => {
            if (prevTheme === "light") {
                return "dark";
            }
            return "light";
        })
    }

    return (
        <header className="border-b border-gray-300 sticky top-0 z-20 bg-gray-100">
            <div className="flex items-center justify-between mx-auto max-w-[1152px] px-6 py-4">
                <Link to="/" className={navLinkClass}>
                    <FontAwesomeIcon icon={faTags} className="h-8 w-8"/>
                    <span className="font-bold">Product Store</span>
                </Link>
                <nav className="flex items-center py-2 z-10">
                    <button className={buttonClassName} aria-label="Toggle theme" onClick={toggleTheme}>
                        <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun}
                                         className="w-4 h-4 dark:text-light text-primary"/>
                    </button>
                    <ul className="flex space-x-6">
                        <li>
                            <NavLink to="/" className={navLinkClass}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({isActive}) => {
                                return isActive ? `underline ${navLinkClass}` : navLinkClass
                            }}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({isActive}) => {
                                return isActive ? `underline ${navLinkClass}` : navLinkClass
                            }}>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" className={({isActive}) =>
                                isActive ? `underline ${navLinkClass}` : navLinkClass
                            }>Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart" className="text-primary py-2"><FontAwesomeIcon icon={faShoppingBasket}/></NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}