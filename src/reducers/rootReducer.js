import { FETCHING_HOME, RECEIVED_HOME } from './../actions/displayHome';
import { FETCHING_DETAILS, RECEIVED_DETAILS ,BUY } from './../actions/displayDetails';
import { FETCHING_SEARCH, RECEIVED_SEARCH } from './../actions/search';
import { SORT_BY_TITLE, SORT_BY_PRICE, SORT_BY_RATE } from './../actions/sort.js';
import { combineReducers } from 'redux';
import { REMOVE_MOVIE } from '../actions/user';

const defaultState = {
    isLoading: false,
    searchText: '',
    sortBy: '',
    balance: 100000,
    movies: [],
    collection: [],
}

const moviesReducer = (state = defaultState, action) => {
  switch(action.type) {
    case FETCHING_HOME:
      return Object.assign({}, state, { isLoading: true });
    case RECEIVED_HOME:
      return Object.assign({}, state, { isLoading: false, movies: [...action.payload]});
    case FETCHING_SEARCH:
      return Object.assign({}, state, { isLoading: true, searchText: action.payload });
    case RECEIVED_SEARCH:
      return Object.assign({}, state, { isLoading: false, movies: [...action.payload]});
    case BUY:
      return Object.assign({}, state, { balance: state.balance - action.payload, collection: [...state.collection, action.id] });
    case SORT_BY_TITLE:
        let movies = state.movies;
        movies = movies.sort( (a,b) =>{
          const titleA = a.title.toUpperCase();
          const titleB = b.title.toUpperCase();

          if(titleA < titleB){
            return -1;
          } else if(titleA > titleB){
            return 1;
          }
          return 0;
        });
      return Object.assign({}, state, { movies: [...movies] });
    case SORT_BY_RATE:
      let moviesRate = state.movies;
      moviesRate = moviesRate.sort( (a,b) =>{
        return b['vote_average'] - a['vote_average'];
      });
      return Object.assign({}, state, { movies: [...moviesRate] });
    case SORT_BY_PRICE:
      let moviesPrice = state.movies;
      moviesPrice = moviesPrice.sort( (a,b) =>{
        return b.price - a.price;
      });
      return Object.assign({}, state, { movies: [...moviesPrice] });
    case REMOVE_MOVIE:
      if(state.collection.length > 0){
        const begin = state.collection.slice(0,state.collection.indexOf(action.id));
        const end = state.collection.slice(state.collection.indexOf(action.id), state.collection.length);
        return Object.assign({}, state, { collection: [...begin, ...end ] });
      }
      return state;
    default: 
      return state;
  }
}

const defaultStateDetails = {
  isLoading: false,
  details: {}
};

const detailsReducer = (state = defaultStateDetails, action) => {
  switch(action.type){
    case FETCHING_DETAILS:
      return Object.assign({}, state, { isLoading: true });
    case RECEIVED_DETAILS:
      return Object.assign({}, state, { isLoading: false, details: action.payload });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
    movies: moviesReducer,
    details: detailsReducer,
})

export default rootReducer;