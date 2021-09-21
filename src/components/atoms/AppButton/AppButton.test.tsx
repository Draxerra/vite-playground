import React from "react";
import AppButton from "./AppButton";
import { render } from "@testing-library/react";

describe("App Button", () => {
  it("should match snapshot", () => {
    const button = render(<AppButton>Test</AppButton>).asFragment();
    expect(button).toMatchSnapshot();
  });
});
