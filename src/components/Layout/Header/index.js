import React from "react";
import PropTypes from "prop-types";

import { Avatar, Menu } from "@/components";
import styles from "./index.less";

function Header({ menus, toggleMenu }) {
  return (
    <div className={styles.header}>
      <div>
        <Menu menus={menus} toggleMenu={toggleMenu} />
      </div>
      <div className={styles.right}>
        <Avatar size={30} round border />
      </div>
    </div>
  );
}

Header.propTypes = {
  menus: PropTypes.array,
  toggleMenu: PropTypes.func
};

Header.defaultProps = {
  menus: [],
  toggleMenu: () => {}
};

export default Header;
