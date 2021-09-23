import React, { FC } from "react";
import classNames from "classnames";

import styles from "./AppButton.module.css";

type AppButtonProps = {
  tag?: "a" | "button";
} & JSX.IntrinsicElements["a"] &
  JSX.IntrinsicElements["button"];

const AppButton: FC<AppButtonProps> = ({
  children,
  className,
  tag = "button",
  ...props
}) => {
  const Component = tag;
  return (
    <Component
      className={classNames(className, styles["app-button"], "primary")}
      {...props}
    >
      {children}
    </Component>
  );
};

export default AppButton;
