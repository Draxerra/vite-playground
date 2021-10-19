import React, { FC, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styles from "./AppTemplate.module.css";

import AppNav from "~/components/organisms/AppNav";
import AppHome from "~/components/pages/AppHome";

const AppContact = lazy(() => import("~/components/pages/AppContact"));
const renderLoader = () => <div>Loading...</div>;

const AppTemplate: FC = () => (
  <Router>
    <div className={styles.appTemplate}>
      <AppNav />
      <main className={styles.appTemplateMain}>
        <Switch>
          <Route exact path="/">
            <AppHome />
          </Route>
          <Route path="/contact">
            <Suspense fallback={renderLoader()}>
              <AppContact />
            </Suspense>
          </Route>
        </Switch>
      </main>
    </div>
  </Router>
);

export default AppTemplate;
