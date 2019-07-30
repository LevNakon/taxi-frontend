import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Footer from '../../components/footer';

describe('Footer --- test render correctly component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Footer />);
    });

    it('render correctly component Footer', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('div with class footer and p exist in component Footer',()=>{
        expect(wrapper.find('div')).toMatchSelector('.footer');
        expect(wrapper.find('p')).toExist();
    });
});