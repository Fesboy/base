import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BaseLayout from "@/layout/baseLayout";
import { LazyFallback } from "@/components";
import { routes } from "@/common/routes";
import history from "@/common/history";

function App() {
  history.listen(location => {
    console.log(location);
  });

  console.log("render");

  return (
    <Router history={history}>
      <BaseLayout>
        <Suspense fallback={LazyFallback}>
          <Switch>
            {routes.map(route => (
              <Route path={route.path} exact component={route.component} />
            ))}
          </Switch>
        </Suspense>
      </BaseLayout>
    </Router>
  );
}

export default App;
