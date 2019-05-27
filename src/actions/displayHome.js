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

export const fetchMovie = () => {
  return function(dispatch) {

    dispatch(fetchHome());

    fetch('https://api.themoviedb.org/3/discover/movie?api_key='+API_KEY+
    '&region=id&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=2019-04-01')
    .then( res => res.json() )
    .then( data => {
      const results = data['results'];
      results.forEach(item =>{
        const price = getPrice(item['vote_average']);
        item.price = price;
      })
      dispatch(receivedHome(results)); 
    });

  }
}
