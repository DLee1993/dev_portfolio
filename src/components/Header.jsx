import PropTypes from "prop-types";

const Header = ({ menuOpen, setMenuOpen }) => {
    return (
        <header className="fixed top-0 z-50 w-full min-h-20 flex justify-between items-center mix-blend-difference">
            <a href="/" className="uppercase font-bold" id="logoText">
                david lee
            </a>
            <button
                id="menuBtn"
                type="button"
                className={menuOpen ? "active" : ""}
                aria-label="open menu"
                aria-controls="menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <div className="line"></div>
                <div className="circle"></div>
                <div className="line"></div>
            </button>
        </header>
    );
};

Header.propTypes = {
    menuOpen: PropTypes.bool,
    setMenuOpen: PropTypes.func,
};

export default Header;
