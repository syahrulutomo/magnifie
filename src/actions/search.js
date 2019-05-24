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

export const fetchSearch = (text) => {
  return function(dispatch) {

    dispatch(fetchingSearch(text));

    fetch('https://api.themoviedb.org/3/search/movie?api_key='+API_KEY
    +'&language=en-US&query='+text+'&page=1&include_adult=false&primary_release_year=2019')
    .then( res => res.json() )
    .then( data => {dispatch(receivedSearch(data['results'])); console.log(data['results']) });

  }
}
