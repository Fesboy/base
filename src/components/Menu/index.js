import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import history from "@/common/history";
import styles from "./index.less";

const MenuItem = Menu.Item;

function getSelectedKeys(pathname) {
  const paths = pathname.split("/").filter(Boolean);
  const keys = [];
  paths.reduce((prev, path) => {
    const key = prev + "/" + path;
    keys.push(key);
    return key;
  }, "");
  return keys.length ? keys : ["/"];
}

function HeaderMenu({ menus }) {
  const [pathname, setPathname] = useState(history.location.pathname);

  const handleClick = useCallback(
    e => {
      if (e.key === pathname) return;
      setPathname(e.key);
    },
    [pathname]
  );

  return (
    <Menu
      className={styles.menu}
      mode="horizontal"
      selectedKeys={getSelectedKeys(pathname)}
      onClick={handleClick}
    >
      {menus.map(menu => (
        <MenuItem key={menu.path}>
          <Link to={menu.path}>{menu.name}</Link>
        </MenuItem>
      ))}
    </Menu>
  );
}

HeaderMenu.propTypes = {
  menus: PropTypes.array,
  pathname: PropTypes.string,
  toggleMenu: PropTypes.func
};

HeaderMenu.defaultProps = {
  menus: [],
  pathname: "/",
  toggleMenu: () => {}
};

export default React.memo(HeaderMenu);
