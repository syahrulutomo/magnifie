import React from 'react';
import { shallow } from 'enzyme';
import { findByAttribute } from './../utils/findBy';
import { Product } from '../../components/Product';

const setup = () => {
    const props = {
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
            320288
        ],
      },
      movie: {
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
        price: 1000
    }
}
  
    const enzymeWrapper = shallow(<Product {...props} />)
  
    return {
      props,
      enzymeWrapper
    }
}

describe('Product Component', () => {
    
    it('should contains product title', () => {
        const { enzymeWrapper } = setup();
        const title = findByAttribute(enzymeWrapper, 'product__title');
        expect(title.length).toBe(1);
    });

    it('should contains product rate', () => {
        const { enzymeWrapper } = setup();
        const rate = findByAttribute(enzymeWrapper, 'product__stars');
        expect(rate.length).toBe(1);
    });

    it('should contains product price', () => {
        const { enzymeWrapper } = setup();
        const price = findByAttribute(enzymeWrapper, 'product__price');
        expect(price.length).toBe(1);
    });

    it('price should more than 0', () => {
        const { props } = setup();
        expect(props.movie.price).toBeGreaterThan(0);
    });

    it('should contains product poster', () => {
        const { enzymeWrapper, props } = setup();
        const poster = findByAttribute(enzymeWrapper, 'product__img');
        expect(poster.length).toBe(1);
        expect(props.movie['poster_path']).not.toBe(null);
    });

})