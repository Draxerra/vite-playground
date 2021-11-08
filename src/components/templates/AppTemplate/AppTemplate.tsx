import React, { FC, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styles from "./AppTemplate.module.css";

import AppNav from "~/components/organisms/AppNav";
import AppHome from "~/components/pages/AppHome";

const AppContact = lazy(() => import("~/components/pages/AppContact"));
const renderLoader = () => <div>Loading...</div>;

const AppTemplate: FC = () => (
  <Router>
    <div className={styles.appTemplate}>
      <header>
        <h1 className="sr-only">Vite React Test App</h1>
        <AppNav />
      </header>
      <main className={styles.appTemplatePage}>
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
      </main>
      <footer></footer>
    </div>
  </Router>
);

export default AppTemplate;
