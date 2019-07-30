import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Error404 from '../../components/error404';

describe('Error404 --- test render correctly component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Error404 />);
    });

    it('render correctly component Error404', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('h1 exist in component Error404',()=>{
        expect(wrapper.find('h1')).toExist();
    });
});