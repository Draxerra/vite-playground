import React from "react";
import AppSkipLink from "./AppSkipLink";
import { render } from "@testing-library/react";

describe("App Skip Link", () => {
  it("should match snapshot", () => {
    const skipLink = render(<AppSkipLink href="#test" />).asFragment();
    expect(skipLink).toMatchSnapshot();
  });
});
