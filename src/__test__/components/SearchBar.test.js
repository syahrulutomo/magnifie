import React from 'react';
import { shallow } from 'enzyme';
import { SearchBar } from '../../components/SearchBar';
import { findByAttribute } from './../utils/findBy';

const setup = () => {
    const props = {
        onFetchSearch: jest.fn()
    }

    const enzymeWrapper = shallow(<SearchBar {...props} />);

    return {
        enzymeWrapper,
        props
    };
};

describe('SearchBar Component', () => {

    it('render properly', () => {
        const { enzymeWrapper } = setup();
        const search = findByAttribute(enzymeWrapper, 'search');
        expect(search.length).toBe(1);
        const button = findByAttribute(enzymeWrapper, 'button-search');
        expect(button.length).toBe(1);
    });

    it('simulate search event', () => {
        const { props } = setup();
        props.onFetchSearch('avengers');
        expect(props.onFetchSearch.mock.calls.length).toBe(1);
    });

    it('simulate search event with empty string', () => {
        const { props } = setup();
        props.onFetchSearch();
        expect(props.onFetchSearch.mock.calls.length).toBe(1);
    });
})