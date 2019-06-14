import React from "react";

import { Spin } from "antd";
import styles from "./index.less";

function LazyFallback() {
  return (
    <div className={styles.fallback}>
      <Spin />
    </div>
  );
}

export default LazyFallback;
