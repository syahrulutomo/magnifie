import {API_KEY} from './../APIkey';

export const FETCHING_HOME = 'FETCHING_HOME';
export const RECEIVED_HOME = 'RECEIVED_HOME';

const fetchHome = () => {
  return {
      type: FETCHING_HOME
  }
}

const receivedHome = (data) => {
    return {
        type: RECEIVED_HOME,
        payload: data
    }
}

export const fetchMovie = () => {
  return function(dispatch) {

    dispatch(fetchHome());

    fetch('https://api.themoviedb.org/3/discover/movie?api_key='+API_KEY+
    '&region=id&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=2019-04-01')
    .then( res => res.json() )
    .then( data => {
      dispatch(receivedHome(data['results'])); 
    });

  }
}
