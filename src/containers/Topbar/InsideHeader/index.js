import React, { useState } from "react";
import { Layout, Select, Popover } from "antd";
// import Icon from "@ant-design/icons";
// import CustomScrollbars from "util/CustomScrollbars";
// import languageData from "../languageData";
// import SearchBox from "components/SearchBox";
// import UserInfo from "components/UserInfo";
import AppNotification from "components/AppNotification";
import HorizontalNav from "../HorizontalNav";
import { Link } from "react-router-dom";
import { toggleCollapsedSideNav } from "../../../appRedux/actions/Setting";
import { setThemeType, onNavStyleChange } from "appRedux/actions/Setting";
import {
  THEME_TYPE_DARK,
  THEME_TYPE_SEMI_DARK,
} from "../../../constants/ThemeSetting";
// import IntlMessages from "../../../util/IntlMessages";
import { NAV_STYLE_FIXED, TAB_SIZE } from "../../../constants/ThemeSetting";
import { useDispatch, useSelector } from "react-redux";
import { NavbarOptions } from "../../../appRedux/actions/Chartaction";

const { Header } = Layout;
const Option = Select.Option;

// const menu = (
//   <Menu onClick={handleMenuClick}>
//     <Menu.Item key="1">Products</Menu.Item>
//     <Menu.Item key="2">Apps</Menu.Item>
//     <Menu.Item key="3">Blogs</Menu.Item>
//   </Menu>
// );

// function handleMenuClick(e) {
//   message.info("Click on menu item.");
// }
const InsideHeader = () => {
  // eslint-disable-next-line
  const [searchText, setSearchText] = useState("");
  // eslint-disable-next-line
  const { locale } = useSelector(({ settings }) => settings);

  // eslint-disable-next-line
  const [value, setValue] = useState(true);
  const { navCollapsed, width } = useSelector(({ common }) => common);

  const [full, setFull] = useState(true);
  const dispatch = useDispatch();
  const { themeType } = useSelector(({ settings }) => settings);

  const sessionSupplier = useSelector((state) => state.sessionSupplier);

  const handlenav = () => {
    dispatch(onNavStyleChange(NAV_STYLE_FIXED));
  };
  const handleTheme = () => {
    if (themeType !== THEME_TYPE_DARK) {
      sessionStorage.setItem("theme", THEME_TYPE_DARK);
      dispatch(setThemeType(THEME_TYPE_DARK));
    } else {
      sessionStorage.setItem("theme", THEME_TYPE_SEMI_DARK);
      dispatch(setThemeType(THEME_TYPE_SEMI_DARK));
    }
  };

  const handlescreen = () => {
    setFull(!full);
    onScreenchange(full);
    // document.documentElement.requestFullscreen();
  };
  const onScreenchange = (full) => {
    if (full) {
      let elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
    }
  };

  // const updateSearchChatUser = (evt) => {
  //   setSearchText(evt.target.value);
  // };

  const getSupplier = (value) => {
    localStorage.setItem("SupplierName", value);
    dispatch(NavbarOptions(value));
    // dispatch(registerUserAction(value))
  };

  // const SearchField = () => {
  //   function handleChange(value) {
  //     getSupplier(value, "handlechange");
  //   }

  //   function handleBlur() {}

  //   function handleFocus() {}
  //   if (value === true) {
  //     if (sessionSupplier.length > 0) {
  //       const SupplierNames = localStorage.getItem("SupplierName");

  //       dispatch(NavbarOptions(SupplierNames));

  //       return (
  //         <Select
  //           showSearch
  //           style={{ width: window.innerWidth / 4.5 }}
  //           defaultValue={SupplierNames}
  //           placeholder="Select a Company"
  //           optionFilterProp="children"
  //           onChange={handleChange}
  //           onFocus={handleFocus}
  //           onBlur={handleBlur}
  //           filterOption={(input, option) =>
  //             option.props.children
  //               .toLowerCase()
  //               .indexOf(input.toLowerCase()) >= 0
  //           }
  //         >
  //           {sessionSupplier.map((data, index) => {
  //             return (
  //               <Option key={index} value={data.ULTIMATE_SUPPLIER_NAME}>
  //                 {data.ULTIMATE_SUPPLIER_NAME}
  //               </Option>
  //             );
  //           })}
  //         </Select>
  //       );
  //     } else {
  //       return (
  //         <Select
  //           showSearch
  //           style={{ width: window.innerWidth / 4.5 }}
  //           // defaultValue={"COMCAST CORPORATION"}
  //           placeholder="Select a Company"
  //           optionFilterProp="children"
  //           onChange={handleChange}
  //           onFocus={handleFocus}
  //           onBlur={handleBlur}
  //           filterOption={(input, option) =>
  //             option.props.children
  //               .toLowerCase()
  //               .indexOf(input.toLowerCase()) >= 0
  //           }
  //         >
  //           {/* //   <Option value="COMCAST CORPORATION" selected>
  //       //     COMCAST CORPORATION
  //       //   </Option>
  //       //   <Option value="CHARTER COMMUNICATIONS INC">
  //       //     CHARTER COMMUNICATIONS INC
  //       //   </Option> */}
  //         </Select>
  //       );
  //     }
  //   }
  // };

  return (
    <div
      className="gx-header-horizontal
      gx-inside-header-horizontal"
    >
      <h1>hi</h1>

      {/* gx-header-horizontal-dark */}
      <Header className="gx-header-horizontal-main">
        {/* fix the issue later className="gx-header-horizontal-main" */}
        <div className="gx-container">
          <div className="gx-header-horizontal-main-flex">
            <div className="gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3 6e">
              <i
                className="gx-icon-btn icon icon-menu"
                onClick={() => {
                  dispatch(toggleCollapsedSideNav(!navCollapsed));
                }}
              />
            </div>
            <Link
              to="/"
              className="gx-d-block gx-d-lg-none gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo"
            >
              <img alt="" src="/assets/images/w-logo.png" />
            </Link>
            <Link
              to="/"
              className="gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo"
            >
              <img alt="" src="/assets/images/logo.png" />
            </Link>

            {width >= TAB_SIZE && (
              <div className="gx-header-horizontal-nav gx-header-horizontal-nav-curve ">
                <HorizontalNav />
              </div>
            )}

            <ul className="gx-header-notifications gx-ml-auto">
              <li className="gx-notify">
                <span className="gx-pointer gx-d-block">
                  <i
                    className="icon icon-frequent"
                    style={{ color: "#fff" }}
                    onClick={handleTheme}
                  />
                </span>
              </li>

              <li className="gx-notify">
                <span className="gx-pointer gx-d-block">
                  <i
                    className="icon icon-card"
                    style={{ color: "#fff" }}
                    onClick={handlenav}
                  />
                </span>
              </li>

              <li className="gx-notify">
                <Popover
                  overlayClassName="gx-popover-horizantal"
                  placement="bottomRight"
                  content={<AppNotification />}
                  trigger="click"
                >
                  <span className="gx-pointer gx-status-pos gx-d-block">
                    <i
                      className="icon icon-notification"
                      style={{ color: "#fff" }}
                    />
                    <span className="gx-status gx-status-rtl gx-small gx-orange" />
                  </span>
                </Popover>
              </li>

              {/* <li className="gx-msg">
                <span className="gx-pointer gx-d-block">
                  <i
                    className="icon icon-expand"
                    style={{ color: "#fff" }}
                    onClick={handlescreen}
                  />
                </span>
              </li> */}

              <li>
                {/* <SearchField /> */}
              </li>

              {/* <li className="gx-user-nav">
                <UserInfo />
              </li> */}
            </ul>
          </div>
        </div>
      </Header>
    </div>
  );
};

export default InsideHeader;
