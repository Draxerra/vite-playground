import React, { ComponentProps, FC } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import AppButton from "~/components/atoms/AppButton";

import styles from "./AppLinkButton.module.css";

type AppLinkButtonProps = ComponentProps<NavLink> &
  ComponentProps<typeof AppButton>;
type AppAnchorButtonProps = AppLinkButtonProps & { navigate: () => void };

const AppAnchorButton: FC<AppAnchorButtonProps> = ({
  navigate,
  tag = "a",
  ...props
}) => (
  <AppButton
    tag={tag}
    onClick={(e) => {
      e.preventDefault();
      navigate();
    }}
    {...props}
  >
    {props.children}
  </AppButton>
);

const AppLinkButton: FC<AppLinkButtonProps> = ({
  activeClassName,
  className,
  ...props
}) => (
  <NavLink
    activeClassName={classNames(activeClassName, styles.appLinkButtonActive)}
    className={classNames(className, styles.appLinkButton)}
    component={AppAnchorButton}
    {...props}
  />
);

export default AppLinkButton;
