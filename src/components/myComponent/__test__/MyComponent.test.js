import React from "react";
import { shallow, mount } from "enzyme";

import MyComponent from "../MyComponent";

describe("MyComponent", () => {
  // mock function for onCountChange;
  const onCountChange = jest.fn();
  let wrapper;

  beforeEach(() => {
    // console.log("mount", mount);
    wrapper = mount(<MyComponent />);
  });

  it("Smoke test: works", () => {
    // const wrapper = shallow(<MyComponent />);
    console.log("wrapper", wrapper);
    expect(2 + 2).toEqual(4);
  });

  it("renders without crashing", () => {
    shallow(<MyComponent />);
  });

  it("renders debugging", () => {
    console.log(wrapper.debug());
    expect(wrapper).not.toBeNull();
  });

  it("shows my default texts", () => {
    expect(wrapper.find("p").text()).toEqual("Count: 0");
  });

  it("correctly increments count by 1", () => {
    wrapper.find("button").simulate("click");
    expect(wrapper.find("p").text()).toEqual("Count: 1");
  });

  it("correctly increments count by 1", () => {
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    expect(wrapper.find("p").text()).toEqual("Count: 4");
  });

  it("correctly increments the count by 1", () => {
    expect(onCountChange).toHaveBeenCalledTimes(1);
    wrapper.find("button").simulate("click");
    expect(onCountChange).toHaveBeenCalledTimes(2);
  });
});
