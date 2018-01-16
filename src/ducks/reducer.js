import axios from 'axios'

const initialState = {
    user: null,
    data: [],
    task: []
  };
  
  const LOGIN = 'LOGIN';
  const GETGOALS = 'GETGOALS';
  const ADDTASK = 'ADDTASK';
  const ADDGOAL = "CREATEGOAL";
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case LOGIN + "_FULFILLED":
        return { ...state, user: action.payload };
      
      case GETGOALS + "_FULFILLED":
        return { ...state, data: action.payload };
      
      case ADDTASK + "_FULFILLED":
        return { ...state, task: action.payload };

        case ADDGOAL + "_FULFILLED":
          return {...state, goal: action.payload};

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

  export var getGoals = () => {
    var request = axios.get('/api/goals').then(response => {
      if(response.data){
        return response.data
      }
    })
    return {
      type: GETGOALS,
      payload: request,
    }
  };

  export var addTask = (body) => {
    var request = axios.post('/api/task', body).then(response => {
      console.log(body)
      if(response.data){
        return response.data
      }
    })
    return {
      type: ADDTASK,
      payload: request
    }
  }

  export var addGoal = (body) => {
    var request = axios.post('/api/goal', body).then(response => {
      console.log(body)
      if(response.data){
        return response.data
      }
    })
    return {
    type: ADDGOAL,
    payload: request
    }
  }