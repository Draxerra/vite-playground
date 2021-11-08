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
      className={classNames(className, styles.appButton)}
      {...(props as unknown)}
    >
      {children}
    </Component>
  );
};

export default AppButton;
