import React from "react";

import { Avatar } from "@/components";
import styles from "./App.less";

function App() {
  return (
    <div className={styles.app}>
      <h4>{ENV === "DEV" ? "开发环境" : "生产环境"}</h4>
      <Avatar />
      <h5>打完收工</h5>
    </div>
  );
}

export default App;
