import "./HamburgerShopStyle.css";

const HamburgerShopIcon = ({ wrapperStyle, iconStyle, catalogHandler}) => {
    return (
        <div className={"burger-icon-wrapper " + wrapperStyle}>
            <div className={"burger-icon " + iconStyle} onClick={catalogHandler}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default HamburgerShopIcon;