import { useState } from "react";
import classNames from "classnames";

import Form from "./Form";
import HamburgerShopIcon from "../menu/HamburgerShopIcon";

import "./SearchBarStyle.css";
import "./../menu/HamburgerShopStyle.css";

const SearchBar = ({ isActivate, searchBarToggle }) => {
  const [searchValue, setSearchValue] = useState("");
  const searchValueHandle = (queyText) => {
    setSearchValue(queyText);
  };
  return (
    <div
      className={classNames("header-searchBarWrapper", {
        "header-searchBarWrapper-active": isActivate,
      })}
    >
      <div className="header-searchBar-header-close">
        <HamburgerShopIcon
          iconStyle={"burger-icon-active"}
          wrapperStyle={"burger-iconCross-wrapper"}
          catalogHandler={searchBarToggle}
        />
      </div>
      <div className="header-searchBar-header">
        <Form searchValueHandle={searchValueHandle} searchValue={searchValue} />
      </div>
      <div className="header-searchBar-main"></div>
    </div>
  );
};

export default SearchBar;
