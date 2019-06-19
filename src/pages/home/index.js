import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";

function Home({ history }) {
  const goMessage = useCallback(() => {
    if (localStorage.getItem("node_base_user")) {
      history.push("/message");
    } else {
      history.push("/login");
    }
  });

  const login = useCallback(() => {
    history.push("/user");
  });

  const logout = useCallback(() => {
    localStorage.removeItem("node_base_user");
    history.push("/");
  });

  const isLogin = !!localStorage.getItem("node_base_user");

  return (
    <div>
      <h3>首页</h3>
      <button onClick={goMessage}>留言</button>
      <button onClick={isLogin ? logout : login}>
        {isLogin ? "退出" : "登录"}
      </button>
    </div>
  );
}

export default withRouter(Home);
