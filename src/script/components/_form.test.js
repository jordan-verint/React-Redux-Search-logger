import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import FormSearch from './_form';

describe("<FormSearch />", () => {
    it("should render correctly", () => {
        const output = shallow(<FormSearch title="mockTitle" url="mockUrl" />);
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});