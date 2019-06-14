import React from "react";
import PropTypes from "prop-types";

import { Avatar, Menu } from "@/components";
import styles from "./index.less";

function Header({ menus }) {
  return (
    <div className={styles.header}>
      <div>
        <Menu menus={menus} />
      </div>
      <div className={styles.right}>
        <Avatar size={30} round border />
      </div>
    </div>
  );
}

Header.propTypes = {
  menus: PropTypes.array
};

Header.defaultProps = {
  menus: []
};

export default Header;
