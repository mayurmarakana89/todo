import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

let wrapper = null;

const defaultProps = {
};

const init = (props = {}) => {
    wrapper = shallow(<App {...defaultProps} {...props} />);

    afterEach(() => {
        wrapper.update();
    });
};

describe('App', () => {
    init();
    it('should render the component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});