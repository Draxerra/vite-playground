import React, { FC } from "react";
import classNames from "classnames";

type AppContactProps = JSX.IntrinsicElements["div"];
const AppContact: FC<AppContactProps> = ({ className, ...props }) => (
  <div className={classNames(className)} {...props}>
    <span>Contact Page</span>
  </div>
);

export default AppContact;
