import React from 'react';
import { mount } from 'enzyme';
import { SortBar } from '../../components/SortBar';
import { findByAttribute } from './../utils/findBy';
import sinon from 'sinon';


const setup = () => {
    const props = {
        onSortByTitle: jest.fn(),
        onSortByRate: jest.fn(),
        onSortByPrice: jest.fn()
    }

    const enzymeWrapper = mount(<SortBar {...props} />);

    return {
        enzymeWrapper,
        props
    };
};

describe('SortBar Component', () => {

    afterEach( () => {
        sinon.restore();
    });

    it('render properly', () => {
        const { enzymeWrapper } = setup();
        const search = findByAttribute(enzymeWrapper, 'sort-bar');
        expect(search.length).toBe(1);
    });

    it('simulate sort by title', () => {
        const { enzymeWrapper, props } = setup();
        const event = {target: { value: 'title' }};
        const sort = findByAttribute(enzymeWrapper, 'sort-bar');
        sort.simulate('change', event);
        expect(props.onSortByTitle.mock.calls.length).toBe(1);
    });

    it('simulate sort by rate', () => {
        const { enzymeWrapper, props } = setup();
        const event = {target: { value: 'rate' }};
        const sort = findByAttribute(enzymeWrapper, 'sort-bar');
        sort.simulate('change', event);
        expect(props.onSortByRate.mock.calls.length).toBe(1);
    });

    it('simulate sort by price', () => {
        const { enzymeWrapper, props } = setup();
        const event = {target: { value: 'price' }};
        const sort = findByAttribute(enzymeWrapper, 'sort-bar');
        sort.simulate('change', event);
        expect(props.onSortByPrice.mock.calls.length).toBe(1);
    });
})