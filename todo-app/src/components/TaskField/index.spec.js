import React from 'react';
import { shallow } from 'enzyme';

import TaskField from '../TaskField';

const mockFn = jest.fn();

let wrapper = null;

const defaultProps = {
    handleChange: mockFn
};

const init = (props = {}) => {
    wrapper = shallow(<TaskField {...defaultProps} {...props} />);

    afterEach(() => {
        wrapper.update();
    });
};

describe('TaskField', () => {
    init();
    
    it('should render the component correctly', () => {   
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the input field of type - text', () => { 
        expect(wrapper.find('input[type="text"]')).toBeTruthy();
    });

    it('should call change function', () => {
        wrapper.find('.taskInput').simulate('change');
        expect(defaultProps.handleChange).toHaveBeenCalled();
    });
});