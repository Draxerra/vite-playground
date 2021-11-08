import React, { FC, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styles from "./AppTemplate.module.css";

import AppNav from "~/components/organisms/AppNav";
import AppHome from "~/components/pages/AppHome";

const AppContact = lazy(() => import("~/components/pages/AppContact"));
const renderLoader = () => <div>Loading...</div>;

const AppTemplate: FC = () => (
  <Router>
    <main className={styles.appTemplate}>
      <AppNav />
      <section className={styles.appTemplatePage}>
        <Routes>
          <Route path="/" element={<AppHome />} />
          <Route
            path="contact"
            element={
              <Suspense fallback={renderLoader()}>
                <AppContact />
              </Suspense>
            }
          />
        </Routes>
      </section>
    </main>
  </Router>
);

export default AppTemplate;
