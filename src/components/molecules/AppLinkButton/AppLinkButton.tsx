import React, { FC } from "react";
import {
  useHref,
  useLinkClickHandler,
  useMatch,
  useResolvedPath,
  NavLinkProps,
} from "react-router-dom";
import classNames from "classnames";

import AppButton from "~/components/atoms/AppButton";

import styles from "./AppLinkButton.module.css";

type AppLinkButtonProps = JSX.IntrinsicElements["a"] & NavLinkProps;
const AppLinkButton: FC<AppLinkButtonProps> = ({
  className,
  onClick,
  replace = false,
  state,
  target,
  to,
  ...props
}) => {
  const href = useHref(to);
  const handleClick = useLinkClickHandler(to, { replace, state, target });

  const resolved = useResolvedPath(to);
  const isActive = useMatch({ path: resolved.pathname, end: true }) !== null;

  if (isActive) {
    props["aria-current"] = "page";
  }

  return (
    <AppButton
      {...props}
      className={classNames(
        className,
        styles.appLinkButton,
        isActive && styles.appLinkButtonActive
      )}
      href={href}
      onClick={(e) => {
        onClick?.(e);
        if (!e.defaultPrevented) {
          handleClick(e);
        }
      }}
      tag="a"
      target={target}
    />
  );
};

export default AppLinkButton;
