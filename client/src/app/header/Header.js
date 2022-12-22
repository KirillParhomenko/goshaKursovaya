import { useState, useEffect } from "react";

import HamburgerShopInactive from "./menu/HamburgerShopInactive";
import HamburgerShopActive from "./menu/HamburgerShopActive";
import SearchBarActivator from "./searchBar/SearchBarActivator";
import SearchBar from "./searchBar/SearchBar";
import ShoppingCart from "./shoppingCart/ShoppingCart";
import Logo from "./logo/Logo";

import "./HeaderStyle.css";
import classNames from "classnames";
import FadeMode from "./FadeMode";

const Header = ({
  isCatalogShowed,
  catalogHandler,
  catalogData,
  catalogQueryParamHandler,
  disableShowProductCategory,
}) => {
  const [searchBar, setSearchBar] = useState(false);
  const [stickyHeader, setStickyHeader] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setStickyHeader(window.pageYOffset >  0);
      });
    }
  });

  const searchBarToggle = () => {
    setSearchBar(!searchBar);
  };

  return (
    <nav
      className={classNames("header", {
        stickyHeader: stickyHeader,
        sgr: stickyHeader,
      })}
    >
      <HamburgerShopActive
        catalogHandler={catalogHandler}
        data={catalogData}
        isCatalogShowed={isCatalogShowed}
        catalogQueryParamHandler={catalogQueryParamHandler}
      />
      <HamburgerShopInactive catalogHandler={catalogHandler} />
      <div className="logoWrapper" onClick={disableShowProductCategory}>
        <Logo logoStyle={"logo"} />
      </div>
      <div className="headerRightWrapper">
        <SearchBarActivator searchBarToggle={searchBarToggle} />
        <ShoppingCart />
      </div>
      <SearchBar isActivate={searchBar} searchBarToggle={searchBarToggle} />
      {isCatalogShowed && <FadeMode someHandler={catalogHandler} />}
    </nav>
  );
};

export default Header;
