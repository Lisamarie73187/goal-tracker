import axios from 'axios'

const initialState = {
    user: null,
    data: []
  };
  
  const LOGIN = 'LOGIN';
  const GETGOALS = 'GETGOALS';
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case LOGIN + "_FULFILLED":
        return { ...state, user: action.payload };
      
      case GETGOALS + "_FULFILLED":
        return { ...state, data: action.payload };
      default:
        return state;
    }
  };
  
  export const login = () => {
    var request = axios.get('/user-data').then(response => {
      if (response.data) {
        return response.data
      }
    })
    return {
      type: LOGIN,
      payload: request,
    };
  };

  export var goals = () => {
    var request = axios.get('api/goals').then(response => {
      if(response.data){
        return response.data
      }
    })
    return {
      type: GETGOALS,
      payload: request,
    }
  }