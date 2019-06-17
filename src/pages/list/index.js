import React from "react";
import { connect } from "react-redux";

function List({ list }) {
  return <h3>list page: {list.list.join("，")}</h3>;
}

export default connect(({ list }) => ({ list }))(List);
