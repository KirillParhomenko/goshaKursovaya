import { BsSearch } from "react-icons/bs";

const SearchBarActivator = ({ searchBarToggle }) => {
  return (
    <div className="header-searchBar-activator" onClick={searchBarToggle}>
      <BsSearch size={"8%"} color={"#444444"}/>
    </div>
  );
};

export default SearchBarActivator;
