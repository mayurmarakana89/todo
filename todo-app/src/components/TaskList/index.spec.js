import React from 'react';
import { shallow } from 'enzyme';

import TaskList from '../TaskList';

const mockFn = jest.fn();

let wrapper = null;

const defaultProps = {
    tasks: [],
    handleCheckbox: mockFn,
    handleDelete: mockFn
};

const init = (props = {}) => {
    wrapper = shallow(<TaskList {...defaultProps} {...props} />);

    afterEach(() => {
        wrapper.update();
    });
};

describe('TaskList', () => {
    init();
    it('should render the component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the task items', () => {
        init({
            tasks: [
                { taskId: 1, label: "Task 1", completed: false },
                { taskId: 2, label: "Task 2", completed: false }
            ]
        })
        expect(wrapper.find('TaskItem')).toHaveLength(2);
    });

});