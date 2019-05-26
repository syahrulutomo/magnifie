import {API_KEY} from './../APIkey';

export const FETCHING_DETAILS = 'FETCHING_DETAILS';
export const RECEIVED_DETAILS = 'RECEIVED_DETAILS';
export const BUY = 'BUY';

const fetchingDetails = () => {
  return {
      type: FETCHING_DETAILS
  }
}

const receivedDetails= (data) => {
    return {
        type: RECEIVED_DETAILS,
        payload: data
    }
}

export const buy = (id,price) => {
    return {
        type: BUY,
        payload: price,
        id: id,
    }
}

export const fetchDetails = (id) => {
  return function(dispatch) {

    dispatch(fetchingDetails());

    fetch('https://api.themoviedb.org/3/movie/'+id+'?api_key='+API_KEY+'&language=en-US')
    .then( res => res.json() )
    .then( data => {dispatch(receivedDetails(data))});

  }
}
