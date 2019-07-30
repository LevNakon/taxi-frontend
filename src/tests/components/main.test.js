import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Main from '../../components/main';

describe('Main --- test render correctly component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Main />)
    });

    it('render correctly component Main', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

});