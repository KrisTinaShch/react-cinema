import logo from "../../assets/icons/pngwing.com.png";
import heart from "../../assets/icons/icons8-червы-100.png";

function Header() {
    return (
        <header>
            <a className="header__logo-flex" href="./index.html">
                <img src={logo} alt="logo"/>
                <div className="header__logo-flex_sitename">
                    <p>REACT</p>
                    <p>CINEMA</p>
                </div>
            </a>
            <ul className="header__navbar-flex">
                <a href="./index.html">Home</a>
                <a href="./favorites.html">Favorites</a>
                <a href="">Movies</a>
                <a href="">Cartoon</a>
                <a href="">Fantasy</a>
            </ul>
            <div className="header__auth-flex">
                <div className="favorites__movies">
                    <img src={heart} alt="heart" />
                    <p>0</p>
                </div>
                <a>Account</a>
            </div>
        </header>
    )
}

export default Header;