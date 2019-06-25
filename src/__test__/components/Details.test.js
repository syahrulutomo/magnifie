import React from 'react';
import { shallow } from 'enzyme';
import { findByAttribute } from './../utils/findBy';
import { Details } from '../../components/Details';

const setup = () => {
    const props = {
        onFetchDetails: jest.fn(),
        onBuy: jest.fn(),
        match: {
            params: 320288
        },
        movies: {
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
            ]
            ,
            collection: [
                
            ],
        },
        details: {
            adult: false,
            backdrop_path: "/phxiKFDvPeQj4AbkvJLmuZEieDU.jpg",
            belongs_to_collection: null,
            budget: 200000000,
            homepage: "http://darkphoenix.com",
            id: 320288,
            imdb_id: "tt6565702",
            original_language: "en",
            original_title: "Dark Phoenix",
            overview: "The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she's hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey's new abilities to rule the galaxy.",
            popularity: 246.408,
            poster_path: "/kZv92eTc0Gg3mKxqjjDAM73z9cy.jpg",
            release_date: "2019-06-05",
            revenue: 208217313,
            runtime: 114,
            status: "Released",
            tagline: "The phoenix will rise",
            title: "Dark Phoenix",
            video: false,
            vote_average: 6.3,
            vote_count: 883,
        }
    }
  
    const enzymeWrapper = shallow(<Details {...props} />)
  
    return {
      props,
      enzymeWrapper
    }
}

describe('Details Component render', () => {
    
    it('should render without errors', () => {
        const { enzymeWrapper } = setup();
        const title = findByAttribute(enzymeWrapper, 'details');
        expect(title.length).toBe(1);
    });

    it('should contain title', () => {
        const { enzymeWrapper } = setup();
        const title = findByAttribute(enzymeWrapper, 'details__title');
        expect(title.length).toBe(1);
    });

    it('should contain tagline', () => {
        const { enzymeWrapper } = setup();
        const tagline = findByAttribute(enzymeWrapper, 'details__tagline');
        expect(tagline.length).toBe(1);
    });

    it('should contain poster', () => {
        const { enzymeWrapper } = setup();
        const poster = findByAttribute(enzymeWrapper, 'details__img');
        expect(poster.length).toBe(1);
    });

    it('should contain overview', () => {
        const { enzymeWrapper } = setup();
        const overview = findByAttribute(enzymeWrapper, 'details__overview');
        expect(overview.length).toBe(1);
    });

    it('should contain rate', () => {
        const { enzymeWrapper } = setup();
        const rate = findByAttribute(enzymeWrapper, 'details__rate');
        expect(rate.length).toBe(1);
    });

    it('should contain duration', () => {
        const { enzymeWrapper } = setup();
        const duration = findByAttribute(enzymeWrapper, 'details__duration');
        expect(duration.length).toBe(1);
    });

    it('should contain runtime', () => {
        const { enzymeWrapper } = setup();
        const runtime = findByAttribute(enzymeWrapper, 'details__runtime');
        expect(runtime.length).toBe(1);
    });

    it('should contain price', () => {
        const { enzymeWrapper } = setup();
        const price = findByAttribute(enzymeWrapper, 'details__price');
        expect(price.length).toBe(1);
    });

    it('user has owned the movie', () => {
        const { enzymeWrapper } = setup();
        const owned = findByAttribute(enzymeWrapper, 'details__own-yes');
        expect(owned.length).toBe(0);
    });

    it('user hasnt owned yet the movie', () => {
        const { enzymeWrapper } = setup();
        const owned = findByAttribute(enzymeWrapper, 'details__own-no');
        expect(owned.length).toBe(1);
    });

    it('buy button active', () => {
        const { enzymeWrapper } = setup();
        const buy = findByAttribute(enzymeWrapper, 'details__buy');
        expect(buy.length).toBe(1);
    });

    it('buy button disabled', () => {
        const { enzymeWrapper } = setup();
        const buy = findByAttribute(enzymeWrapper, 'details__buy-disabled');
        expect(buy.length).toBe(0);
    });

    it('simulate buy a movie', () => {
        const { enzymeWrapper, props } = setup();
        const buy = findByAttribute(enzymeWrapper, 'details__buy');
        buy.props().onClick();
        expect(props.onBuy.mock.calls.length).toBe(1);
    });

});