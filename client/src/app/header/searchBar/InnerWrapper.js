import { BsSearch } from "react-icons/bs";

import "./SearchBarStyle.css";

const InnerWrapper = (searchValueHandle, searchValue) => {
  const putQuery = (event) => {
    searchValueHandle(event.target.value);
  };

  console.log(searchValue)

  const clearInput = (event) => {
    if (event.key === "Enter") {
      searchValueHandle("");
    }
  };

  return (
    <div className="searchInputWrapper">
      <div className="searchInputLogo">
        <BsSearch size={"25px"} color={"#444444"} />
      </div>
      <input
        type="text"
        placeholder="Search"
        onChange={putQuery}
      />
    </div>
  );
};

export default InnerWrapper;
