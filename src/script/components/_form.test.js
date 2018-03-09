import React from "react";
import { shallow, mount } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import FormSearch from './_form';

describe('Form Search', () => {
    let props;
    let mountedForm;

    // Form Element
    const Form = shallow( <FormSearch /> );
    
    beforeEach( () => {
        props = {
            placeholder: undefined,
            clearOnSubmit: undefined
        };
    });

    // Form Element to exists
    it('Form element to exists', () => {
        expect( Form.find('form').length ).toEqual(1);
    });

    // Form input change
    it('Should update state when form input is changed', () => {
        const input = Form.find('input');
        input.simulate('change', {target: {value: 'Form search added'}});
        expect(Form.state().value).toEqual('Form search added');
    });
});
