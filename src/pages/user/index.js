import React, { useState, useCallback, useEffect } from "react";
import { withRouter } from "react-router-dom";

function User({ history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("node_base_user")) {
      history.push("/");
    }
  }, []);

  const login = useCallback(() => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(res => res.json())
      .then(res => {
        alert(res.message);
        if (res.status) {
          localStorage.setItem("node_base_user", JSON.stringify({ username }));
          history.push("/");
        }
      });
  }, [username, password]);

  const register = useCallback(() => {
    fetch("http://localhost:3000/register", {
      method: "POST",
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(res => res.json())
      .then(res => {
        alert(res.message);
        if (res.status) {
          localStorage.setItem("node_base_user", JSON.stringify({ username }));
          history.push("/");
        }
      });
  }, [username, password]);

  return (
    <div>
      用户名
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      密码
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={login}>登录</button>
      <button onClick={register}>注册</button>
    </div>
  );
}

export default withRouter(User);
