import React, { useState, useEffect } from "react";
import { Layout, Select, Popover } from "antd";
import { Link } from "react-router-dom";
import { toggleCollapsedSideNav } from "../../appRedux/actions";
// import UserInfo from "../../components/UserInfo";
import AppNotification from "../../components/AppNotification";
import MailNotification from "../../components/MailNotification";
import Auxiliary from "util/Auxiliary";
import IntlMessages from "util/IntlMessages";
import {
  NavbarOptions,
  SuppliersListaction,
} from "../../appRedux/actions/Chartaction";

import { setThemeType, onNavStyleChange } from "appRedux/actions/Setting";
import {
  THEME_TYPE_DARK,
  THEME_TYPE_SEMI_DARK,
} from "../../constants/ThemeSetting";
import {
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_MINI_SIDEBAR,
  TAB_SIZE,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
} from "../../constants/ThemeSetting";
import { useDispatch, useSelector } from "react-redux";
// import { NotificationManager } from "react-notifications";
// NotificationContainer
const Option = Select.Option;
const { Header } = Layout;

const Topbar = () => {
  const { navStyle, themeType } = useSelector(({ settings }) => settings);
  const { navCollapsed, width } = useSelector(({ common }) => common);
  const [full, setFull] = useState(true);

  // eslint-disable-next-line
  const [value, setValue] = useState(true);
  const dispatch = useDispatch();

  const sessionSupplier = useSelector((state) => state.sessionSupplier);

  useEffect(() => {
    dispatch(SuppliersListaction());
    localStorage.setItem("SupplierName", "COMCAST CORPORATION");
    // eslint-disable-next-line
  }, []);
  const handleTheme = () => {
    // setLight(!light);
    // onThemeTypeChange(light);
    if (themeType !== THEME_TYPE_DARK) {
      sessionStorage.setItem("theme", THEME_TYPE_DARK);
      dispatch(setThemeType(THEME_TYPE_DARK));
    } else {
      sessionStorage.setItem("theme", THEME_TYPE_SEMI_DARK);
      dispatch(setThemeType(THEME_TYPE_SEMI_DARK));
    }
  };
  // const onThemeTypeChange = (light) => {
  //   if (light) {
  //     sessionStorage.setItem("theme", THEME_TYPE_DARK);
  //     dispatch(setThemeType(THEME_TYPE_DARK));
  //   } else {
  //     sessionStorage.setItem("theme", THEME_TYPE_SEMI_DARK);
  //     dispatch(setThemeType(THEME_TYPE_SEMI_DARK));
  //   }
  // };
  const onNavStyleChanges = () => {
    dispatch(onNavStyleChange(NAV_STYLE_INSIDE_HEADER_HORIZONTAL));
  };
  const handleScreen = () => {
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

  const getSupplier = (value) => {
    localStorage.setItem("SupplierName", value);
    dispatch(NavbarOptions(value));
    // dispatch(registerUserAction(value))
  };

  const SearchField = () => {
    function handleChange(value) {
      getSupplier(value, "handlechange");
    }

    function handleBlur() {}

    function handleFocus() {}
    if (value === true) {
      if (sessionSupplier.length > 0) {
        const SupplierNames = localStorage.getItem("SupplierName");

        dispatch(NavbarOptions(SupplierNames));

        return (
          <Select
            showSearch
            style={{ width: window.innerWidth / 4.5 }}
            defaultValue={SupplierNames}
            placeholder="Select a Company"
            optionFilterProp="children"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
          >
            {sessionSupplier.map((data, index) => {
              return (
                <Option key={index} value={data.ULTIMATE_SUPPLIER_NAME}>
                  {data.ULTIMATE_SUPPLIER_NAME}
                </Option>
              );
            })}
          </Select>
        );
      } else {
        return (
          <Select
            showSearch
            style={{ width: window.innerWidth / 4.5 }}
            // defaultValue={"COMCAST CORPORATION"}
            placeholder="Select a Company"
            optionFilterProp="children"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
          >
            {/* //   <Option value="COMCAST CORPORATION" selected>
        //     COMCAST CORPORATION
        //   </Option>
        //   <Option value="CHARTER COMMUNICATIONS INC">
        //     CHARTER COMMUNICATIONS INC
        //   </Option> */}
          </Select>
        );
      }
    }
  };

  return (
    <Header>
      {navStyle === NAV_STYLE_DRAWER ||
      ((navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR) &&
        width < TAB_SIZE) ? (
        <div className="gx-linebar gx-mr-3">
          <i
            className="gx-icon-btn icon icon-menu"
            onClick={() => {
              dispatch(toggleCollapsedSideNav(!navCollapsed));
            }}
          />
        </div>
      ) : null}
      <Link to="/" className="gx-d-block gx-pointer">
        {/* <img alt="" src="/assets/images/text-logo.png" /> */}
        {width >= TAB_SIZE ? (
          <div>AECOM</div>
        ) : width >= 520 ? (
          <div style={{ fontSize: "14px", lineHeight: "14px" }}>
            Intelligent Dispute Analytics
          </div>
        ) : width >= 460 ? (
          <div style={{ fontSize: "12px", lineHeight: "14px" }}>
            Intelligent Dispute Analytics
          </div>
        ) : (
          <div style={{ fontSize: "14px", lineHeight: "14px" }}>IDA</div>
        )}
        {/* Intelligent Dispute Analytics */}
      </Link>

      <ul className="gx-header-notifications gx-ml-auto">
        {/* {width >= TAB_SIZE ? null : (
          <Auxiliary>
            <li className="gx-notify">
              <Popover
                overlayClassName="gx-popover-horizantal"
                placement="bottomRight"
                content={<AppNotification />}
                trigger="click"
              >
                <span className="gx-pointer gx-d-block">
                  <i className="icon icon-notification" />
                </span>
              </Popover>
            </li>

            <li className="gx-msg">
              <Popover
                overlayClassName="gx-popover-horizantal"
                placement="bottomRight"
                content={<MailNotification />}
                trigger="click"
              >
                <span className="gx-pointer gx-status-pos gx-d-block">
                  <i className="icon icon-chat-new" />
                  <span className="gx-status gx-status-rtl gx-small gx-orange" />
                </span>
              </Popover>
            </li>
          </Auxiliary>
        )} */}
        <li className="gx-notify">
          <span className="gx-pointer gx-d-block">
            <i className="icon icon-frequent" onClick={handleTheme} />
            {/* <i className="fas fa-toggle-on" onClick={handleTheme} /> */}
          </span>
        </li>
        <li className="gx-notify">
          <span className="gx-pointer gx-d-block">
            <i className="icon icon-card" onClick={onNavStyleChanges} />
          </span>
        </li>
        <li className="gx-notify">
          <span className="gx-pointer gx-d-block">
            <i className="icon icon-expand" onClick={handleScreen} />
          </span>
        </li>
        {/* <li className="gx-notify">
          <Popover
            overlayClassName="gx-popover-horizantal"
            placement="bottomRight"
            // content={<AppNotification />}
            trigger="click"
          >
            <span className="gx-pointer gx-d-block">
              <i className="icon icon-notification" />
              <span className="gx-status gx-status-rtl gx-small gx-orange"></span>
            </span>
          </Popover>
        </li> */}

        {/* {width >= TAB_SIZE ? null : (
          <Auxiliary>
            <li className="gx-user-nav">
              <UserInfo />
            </li>
          </Auxiliary>
        )} */}
      </ul>
      {/* <SearchField /> */}
    </Header>
  );
};

export default Topbar;
