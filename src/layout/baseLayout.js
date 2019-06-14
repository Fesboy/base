import React from "react";

import { Layout } from "@/components";
import { menus } from "@/common/routes";

const { Header } = Layout;

function BaseLayout({ children }) {
  return (
    <Layout>
      <Header menus={menus} />
      {children}
    </Layout>
  );
}

export default BaseLayout;
