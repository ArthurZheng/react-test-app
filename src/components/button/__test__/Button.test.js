import React from "react";
import { render, cleanup } from "@testing-library/react";

import ReactDOM from "react-dom";
import Button from "../Button";

afterEach(cleanup);

describe("tests the button component", () => {
  it("renders without crashing", () => {
    const tree = render(<Button />);
    console.log(tree.debug());
  });

  xit("renders without crashing", () => {
    // this is the old way of smoke test;
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div);
  });

  xit("renders without crashing", () => {
    const { getByTestId } = render(<Button label="click me please" />);
    expect(getByTestId("button")).toHaveTextContent("click me please");
  });

  it("renders without crashing", () => {
    const { getByTestId } = render(<Button label="save" />);
    expect(getByTestId("button")).toHaveTextContent("save");
  });

  xit("renders without crashing", () => {
    const { getByTestId } = render(<Button label="happy friday" />);
    expect(getByTestId("button")).toHaveTextContent("happy friday");
  });

  it("matches snapshot 1", () => {
    const tree = render(<Button label="Voila!" />);
    expect(tree).toMatchSnapshot();
  });

  it("matches snapshot 2", () => {
    const tree = render(<Button label="Voila!" />);
    expect(tree).toMatchSnapshot();
  });
});
