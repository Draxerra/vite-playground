import React, { FC } from "react";
import classNames from "classnames";

import styles from "./AppCounter.module.css";

import AppButton from "~/components/atoms/AppButton";

type AppCounterProps = {
  decrement: () => void;
  increment: () => void;
} & JSX.IntrinsicElements["section"];

const AppCounter: FC<AppCounterProps> = ({
  decrement,
  increment,
  children,
  className,
  ...props
}) => (
  <section {...props} className={classNames(className, styles.appCounter)}>
    <h2
      className={classNames(styles.appCounterText, "fs-600")}
      aria-live="polite"
    >
      Current Count: {children}
    </h2>
    <AppButton aria-label="Increment counter" onClick={increment} type="button">
      Increment
    </AppButton>
    <AppButton aria-label="Decrement counter" onClick={decrement} type="button">
      Decrement
    </AppButton>
  </section>
);
export default AppCounter;
