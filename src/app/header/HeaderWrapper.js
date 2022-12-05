import HamburgerMenu from "./menu/HamburgerMenu";
import Logo from "./logo/Logo"
import SearchBar from "./searchBar/SearchBar";
import ShoppingCart from "./shoppingCart/ShoppingCart";

const HeaderWrapper = () => {
    return (
        <nav>
            <HamburgerMenu/>
            <Logo/>
            <FindSpace/>
            <SearchBar/>
            <ShoppingCart/>
        </nav>
    );
}

export default HeaderWrapper;