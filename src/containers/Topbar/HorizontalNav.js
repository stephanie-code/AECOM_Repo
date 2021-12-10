import React from "react";
import { useSelector } from "react-redux";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import IntlMessages from "../../util/IntlMessages";
// import {
//   NAV_STYLE_ABOVE_HEADER,
//   NAV_STYLE_BELOW_HEADER,
//   NAV_STYLE_DEFAULT_HORIZONTAL,
//   NAV_STYLE_INSIDE_HEADER_HORIZONTAL
// } from "../../constants/ThemeSetting";

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

const HorizontalNav = () => {
  // const navStyle = useSelector(({ settings }) => settings.navStyle);
  const { pathname } = useSelector(({ common }) => common);

  // const getNavStyleSubMenuClass = (navStyle) => {
  //   switch (navStyle) {
  //     case NAV_STYLE_DEFAULT_HORIZONTAL:
  //       return "gx-menu-horizontal gx-submenu-popup-curve";
  //     case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
  //       return "gx-menu-horizontal gx-submenu-popup-curve gx-inside-submenu-popup-curve";
  //     case NAV_STYLE_BELOW_HEADER:
  //       return "gx-menu-horizontal gx-submenu-popup-curve gx-below-submenu-popup-curve";
  //     case NAV_STYLE_ABOVE_HEADER:
  //       return "gx-menu-horizontal gx-submenu-popup-curve gx-above-submenu-popup-curve";
  //     default:
  //       return "gx-menu-horizontal";
  //   }
  // };

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split("/")[1];
  return (
    <Menu
      defaultOpenKeys={[defaultOpenKeys]}
      selectedKeys={[selectedKeys]}
      mode="horizontal"
    >
      <Menu.Item key="main">
        <Link to="/main">
          <i className="icon icon-data-display" />
          <span>
            <IntlMessages id="sidebar.main" />
          </span>
        </Link>
      </Menu.Item>

      <Menu.Item key="dispute">
        <Link to="/dispute">
          <i className="icon icon-autocomplete" />
          <span>
            <IntlMessages id="sidebar.dispute" />
          </span>
        </Link>
      </Menu.Item>

      <Menu.Item key="orders">
        <Link to="/orders">
          <i className="icon icon-refer" />
          <span>
            <IntlMessages id="sidebar.orders" />
          </span>
        </Link>
      </Menu.Item>

      {/* <Menu.Item key="install">
        <Link to="/install">
          <i className="icon icon-anchor" /><span><IntlMessages id="sidebar.install" /></span>
        </Link>
      </Menu.Item>

      <Menu.Item key="change">
        <Link to="/change">
          <i className="icon icon-drag-and-drop" /><span><IntlMessages id="sidebar.change" /></span>
        </Link>
      </Menu.Item>

      <Menu.Item key="disconnect">
        <Link to="/disconnect">
          <i className="icon icon-icon" /><span><IntlMessages id="sidebar.disconnect" /></span>
        </Link>
      </Menu.Item> */}
    </Menu>
  );
};

HorizontalNav.propTypes = {};

export default HorizontalNav;
