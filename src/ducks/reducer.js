import axios from 'axios'

const initialState = {
    user: null
  };
  
  const LOGIN = 'LOGIN';
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case LOGIN + "_FULFILLED":
      console.log(action)
        return { ...state, user: action.payload };
      default:
        return state;
    }
  };
  
  export const login = () => {
    var request = axios.get('/user-data').then(response => {
      console.log('log in respoonse',response.data)
      if (response.data) {
        return response.data
      }
    })
    return {
      type: LOGIN,
      payload: request,
    };
  };