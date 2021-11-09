import React, { FC } from "react";
import classNames from "classnames";

import AppButton from "~/components/atoms/AppButton";

import styles from "./AppSkipLink.module.css";

type AppSkipLinkProps = JSX.IntrinsicElements["a"];
const AppSkipLink: FC<AppSkipLinkProps> = ({ className, ...props }) => (
  <AppButton
    {...props}
    className={classNames(className, styles.appSkipLink)}
    tag="a"
  >
    Skip to main content
  </AppButton>
);

export default AppSkipLink;
