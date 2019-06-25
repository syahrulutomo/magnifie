import React from 'react';
import { shallow } from 'enzyme';
import { Home } from '../../components/Home';
import { findByAttribute } from './../utils/findBy';

const setup = () => {
    const props = {
        movies: [
            {
                adult: false,
                backdrop_path: "/phxiKFDvPeQj4AbkvJLmuZEieDU.jpg",
                id: 320288,
                original_language: "en",
                original_title: "Dark Phoenix",
                overview: "The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she's hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey's new abilities to rule the galaxy.",
                popularity: 246.715,
                poster_path: "/kZv92eTc0Gg3mKxqjjDAM73z9cy.jpg",
                release_date: "2019-06-05",
                title: "Dark Phoenix",
                video: false,
                vote_average: 6.3,
                vote_count: 873,
            }
        ],
        onFetchMovie: jest.fn()
    }
    const enzymeWrapper = shallow(<Home {...props} />)
    return { 
        enzymeWrapper,
        props
     };
}

describe('Home Component', () => {
    
    
    it('render without errors', () => {
        const { enzymeWrapper } = setup();
        const home = findByAttribute(enzymeWrapper, 'home');
        expect(home.length).toBe(1);
    });

    it('should contain search bar', () => {
        const { enzymeWrapper } = setup();
        const search = findByAttribute(enzymeWrapper, 'search');
        expect(search.length).toBe(1);
    });

    it('should contain sort combobox', () => {
        const { enzymeWrapper } = setup();
        const sort = findByAttribute(enzymeWrapper, 'sort');
        expect(sort.length).toBe(1);
    });

    it('should contain productlist', () => {
        const { enzymeWrapper } = setup();
        const productList =findByAttribute(enzymeWrapper, 'product-list');
        expect(productList.length).toBe(1);
    });


})