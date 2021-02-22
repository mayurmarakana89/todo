import React from 'react';
import { shallow } from 'enzyme';

import TaskItem from '../TaskItem';

const mockFn = jest.fn();

let wrapper = null;

const defaultProps = {
    id: 'task-1',
    label: 'Test',
    handleCheckbox: mockFn,
    handleDelete: mockFn
};

const init = (props = {}) => {
    wrapper = shallow(<TaskItem {...defaultProps} {...props} />);

    afterEach(() => {
        wrapper.update();
    });
};

describe('TaskItem', () => {
    init();
    it('should render the component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the input field of type - checkbox', () => {
        expect(wrapper.find('.taskItem input[type="checkbox"]')).toHaveLength(1);
    });

    it('renders the delete button', () => {
        expect(wrapper.find('.taskItem .crossIcon')).toHaveLength(1);
    });

    it('should display the label of task as "Test" as strike-through onclick of checkbox', () => {
        wrapper.find('.taskItem input[type="checkbox"]').simulate('click');
        expect(defaultProps.handleCheckbox).toHaveBeenCalled();
    });

    it('should call delete function on click of cross icon', () => {
        wrapper.find('.taskItem .crossIcon').simulate('click');
        expect(defaultProps.handleDelete).toHaveBeenCalled();
    });

    it('should display the label of task as "Demo Test"', () => {
        init({
            label: 'Demo Test'
        });
        expect(wrapper.find('.taskItem label').text().trim()).toEqual('Demo Test');
    });

    it('should display the label of task as "Test" as strike-through', () => {
        init({
            completed: true
        });
        expect(wrapper.find('.taskItem .completedClass')).toHaveLength(1);
    });
});