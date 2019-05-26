import { FETCHING_HOME, RECEIVED_HOME } from './../actions/displayHome';
import { FETCHING_DETAILS, RECEIVED_DETAILS ,BUY } from './../actions/displayDetails';
import { FETCHING_SEARCH, RECEIVED_SEARCH } from './../actions/search';
import { combineReducers } from 'redux';

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