import { BsSearch } from "react-icons/bs";

import "./SearchBarStyle.css";

const InnerWrapper = () => {
  return (
    <div className="searchInputWrapper">
      <div className="searchInputLogo">
        <BsSearch
          size={"25px"}
          color={"#444444"}
        />
      </div>
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default InnerWrapper;
