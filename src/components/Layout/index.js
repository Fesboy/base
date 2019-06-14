import React from "react";

import Header from "./Header";

function Layout({ children }) {
  return <div>{children}</div>;
}

Layout.Header = Header;

export default Layout;
