import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import {
  THEME_TYPE_LITE
} from "../../constants/ThemeSetting";
import IntlMessages from "../../util/IntlMessages";
import { useSelector } from "react-redux";

const MenuItemGroup = Menu.ItemGroup;


const SidebarContent = ({ sidebarCollapsed, setSidebarCollapsed }) => {
  let { navStyle, themeType } = useSelector(({ settings }) => settings);
  let { pathname } = useSelector(({ common }) => common);

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split("/")[1];
  console.log('pathname', defaultOpenKeys)
  return (
    <>
      <SidebarLogo
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
      />
      <div className="gx-sidebar-content">
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? "lite" : "dark"}
            mode="inline"
          >
            <MenuItemGroup
              key="in-built-apps"
              className="gx-menu-group"
              title={"Navigation"}
            >
              <Menu.Item key="dashboard">
                <Link to="/dashboard">
                  <i className="icon icon-refer" />
                  <span>
                    <IntlMessages id="Dashboard" />
                  </span>
                </Link>
              </Menu.Item>

              <Menu.Item key="main">
                <Link to="/main">
                  <i className="icon icon-data-display" />
                  <span>
                    <IntlMessages id="main" />
                  </span>
                </Link>
              </Menu.Item>

              <Menu.Item key="dispute">
                <Link to="/dispute">
                  <i className="icon icon-autocomplete" />
                  <span>
                    <IntlMessages id="App Reviews" />
                  </span>
                </Link>
              </Menu.Item>

              <Menu.Item key="orders">
                <Link to="/orders">
                  <i className="icon icon-refer" />
                  <span>
                    <IntlMessages id="Tweets" />
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
            </MenuItemGroup>
          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};
export default SidebarContent;

