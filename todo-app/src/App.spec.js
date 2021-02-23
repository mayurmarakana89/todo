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

    it('should display app children', () => {
        expect(wrapper.find('.appHeader')).toHaveLength(1);
        expect(wrapper.find('.filterClass')).toHaveLength(1);
        expect(wrapper.find('TaskField')).toHaveLength(1);
        expect(wrapper.find('TaskList')).toHaveLength(1);
    });
});