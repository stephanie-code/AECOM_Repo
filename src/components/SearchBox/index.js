import React from "react";

const SearchBox = ({styleName, placeholder, onChange, value}) => {

  return (
    <div className={`gx-search-bar search-box-transition ${styleName}`}>
      <div className="gx-form-group">
        <input className="ant-input card_title" type="search" placeholder={placeholder} onChange={onChange}
               value={value}/>
        <span className="gx-search-icon gx-pointer"><i className="icon icon-search"/></span>
      </div>
    </div>
  )
};
export default SearchBox;

SearchBox.defaultProps = {
  styleName: "",
  value: "",
};
