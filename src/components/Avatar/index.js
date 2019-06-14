import React from "react";
import PropTypes from "prop-types";

import classnames from "classnames";
import styles from "./index.less";

function Avatar({ size, round, border }) {
  return (
    <div
      className={classnames(styles.avatar, {
        [styles.round]: round,
        [styles.border]: border
      })}
      style={{ width: size, height: size }}
    />
  );
}

Avatar.propTypes = {
  size: PropTypes.number,
  round: PropTypes.bool
};

Avatar.defaultProps = {
  size: 0,
  round: false
};

export default Avatar;
