import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BaseLayout from "@/layout/BaseLayout";
import { routes } from "@/common/routes";
import history from "@/common/history";

function App() {
  return (
    <Router>
      <BaseLayout>
        <Switch>
          {routes.map(route => (
            <Route path={route.path} exact component={route.component} />
          ))}
        </Switch>
      </BaseLayout>
    </Router>
  );
}

export default App;
