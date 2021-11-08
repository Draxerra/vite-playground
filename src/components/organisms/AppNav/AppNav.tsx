import React, { FC } from "react";
import classNames from "classnames";

import AppLinkButton from "~/components/molecules/AppLinkButton";

import styles from "./AppNav.module.css";

type AppNavProps = JSX.IntrinsicElements["nav"];
const AppNav: FC<AppNavProps> = ({ className, ...props }) => (
  <nav {...props} className={classNames(className, styles.appNav)}>
    <h2 className="sr-only">Site Navigation</h2>
    <AppLinkButton to="/" aria-label="Navigate to Home Page">
      Home
    </AppLinkButton>
    <AppLinkButton to="/contact" aria-label="Navigate to Contact Page">
      Contact
    </AppLinkButton>
  </nav>
);

export default AppNav;
