import React from "react";
import { shallow } from "enzyme";
import Recipe from "./Recipe";

describe("Recipe", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Recipe />);
    expect(wrapper).toMatchSnapshot();
  });
});
