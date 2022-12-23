import InnerWrapper from "./InnerWrapper";

import "./SearchBarStyle.css";

const Form = (searchValueHandle, searchValue) => {
  return (
    <form
      className="searchForm"
    >
      <InnerWrapper searchfdValueHandle={searchValueHandle} searchValue={searchValue}/>
    </form>
  );
};

export default Form;
