import React, { useState, useCallback, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

import styles from "./index.less";

function Comment({ getMessages }) {
  const [message, setMessage] = useState("");

  const sendMessage = useCallback(() => {
    if (!message) {
      alert("信息不能为空");
      return;
    }

    const { username } = JSON.parse(localStorage.getItem("node_base_user"));

    fetch("http://localhost:3000/sendMessage", {
      method: "POST",
      body: JSON.stringify({ username, message })
    })
      .then(res => res.json())
      .then(res => {
        alert(res.message);
        if (res.status) {
          getMessages();
          setMessage("");
        }
      });
  }, [message]);

  return (
    <div className={styles.comment}>
      <textarea
        className={styles.text}
        cols="30"
        rows="4"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>提交</button>
    </div>
  );
}

function Message({ history }) {
  const [messages, setMessages] = useState([]);

  const getMessages = useCallback(() => {
    fetch("http://localhost:3000/getMessages", {
      method: "GET"
    }).then(res =>
      res.json().then(res => {
        alert(res.message);
        if (res.status) {
          setMessages(res.data);
        }
      })
    );
  });

  useEffect(() => {
    if (!localStorage.getItem("node_base_user")) {
      history.push("/");
    } else {
      getMessages();
    }
  }, []);

  return (
    <div>
      <ul>
        {messages.map((item, i) => (
          <li key={item.name + i}>
            {item.message} -- {item.name}
          </li>
        ))}
      </ul>
      <Comment getMessages={getMessages} />
      <Link to="/">返回</Link>
    </div>
  );
}

export default withRouter(Message);
