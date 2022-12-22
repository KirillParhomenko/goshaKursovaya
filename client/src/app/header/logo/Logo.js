import logo from "./img/logo.png";
import "./../HeaderStyle.css";

const Logo = ({logoStyle}) => {
    return (
        <div className={logoStyle}>
            <img src={logo} alt="Logo img" style={{ "width": "100%", "height": "auto", "objectFit": "cover" }} />
        </div>
    );
}

export default Logo;