import {API_KEY} from './../APIkey';

export const FETCHING_SEARCH = 'FETCHING_SEARCH';
export const RECEIVED_SEARCH = 'RECEIVED_SEARCH';

const fetchingSearch = (text) => {
  return {
      type: FETCHING_SEARCH,
      payload: text
  }
}

const receivedSearch = (data) => {
    return {
        type: RECEIVED_SEARCH,
        payload: data
    }
}

const getPrice = (rate) => {
  if(rate < 3)
    return 3500;
  else if(rate > 3 && rate <= 6)
    return 8250;
  else if(rate > 6 && rate <= 8)
    return 16350;
  else if(rate > 8 && rate <= 10)
    return 21250;
}

export const fetchSearch = (text) => {
  return function(dispatch) {

    if(text === ''){
      return
    }else {
      dispatch(fetchingSearch(text));

      fetch('https://api.themoviedb.org/3/search/movie?api_key='+API_KEY
      +'&language=en-US&query='+text+'&page=1&include_adult=false&primary_release_year=2019')
      .then( res => res.json() )
      .then( data => {
        const results = data['results'];
        results.forEach(item =>{
          const price = getPrice(item['vote_average']);
          item.price = price;
        })
        dispatch(receivedSearch(results)) 
      });
    }

  }
}
