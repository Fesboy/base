import React, { Suspense } from "react";

import { Layout, LazyFallback } from "@/components";
import { menus } from "@/common/routes";

const { Header } = Layout;

function BaseLayout({ children }) {
  return (
    <Layout>
      <Header menus={menus} />
      <Suspense fallback={LazyFallback}>{children}</Suspense>
    </Layout>
  );
}

export default BaseLayout;
