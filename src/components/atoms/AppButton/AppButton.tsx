import React, { FC } from "react";
import classNames from "classnames";

import styles from "./AppButton.module.css";

type AppButtonProps =
  | ({ tag: "a" } & JSX.IntrinsicElements["a"])
  | ({ tag?: "button" } & JSX.IntrinsicElements["button"]);

const AppButton: FC<AppButtonProps> = ({
  children,
  className,
  tag: Component = "button",
  ...props
}) => {
  return (
    <Component
      {...(props as unknown)}
      className={classNames(className, styles.appButton)}
    >
      {children}
    </Component>
  );
};

export default AppButton;
