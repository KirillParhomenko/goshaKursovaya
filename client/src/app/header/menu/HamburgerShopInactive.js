import HamburgerShopIcon from "./HamburgerShopIcon";

import "./HamburgerShopStyle.css";


const HamburgerShopInactive = ({ catalogHandler }) => {
    return (
        <div className="burger-btn">
            <HamburgerShopIcon additionalClass={""} catalogHandler={catalogHandler}/>
        </div>
    );
}

export default HamburgerShopInactive;