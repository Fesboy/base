import React from "react";
import { connect } from "react-redux";

function Home({ home }) {
  return <h3>{home.name} page</h3>;
}

export default connect(({ home }) => ({ home }))(Home);
