import axios from 'axios'

const initialState = {
    user: null,
    data: [],
    task: [],
    tasks: [],
    subTasks: []
  };
  
  const LOGIN = 'LOGIN';
  const GETGOALS = 'GETGOALS';
  const ADDTASK = 'ADDTASK';
  const ADDGOAL = "CREATEGOAL";
  const GETTASK = "GETTASK";
  const ADDSUBTASK = "ADDSUBTASK";

  
  export default (state = initialState, action) => {
    switch (action.type) {
      case LOGIN + "_FULFILLED":
        return { ...state, user: action.payload };
      
      case GETGOALS + "_FULFILLED":
      console.log(action.payload)
        return { ...state, data: action.payload };
      
      case ADDTASK + "_FULFILLED":
        return { ...state, task: action.payload };

      case ADDGOAL + "_FULFILLED":
          return {...state, goal: action.payload};

      case GETTASK + "_FULFILLED":
        return {...state, tasks: action.payload};

      case ADDSUBTASK + "_FULFILLED":
        return {...state, subTasks: action.payload};

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
    // console.log(body.data)
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

  export var getTask = (id) => {
    console.log('STRINGONE',id)
    var request =  axios.get(`/api/task/${id}`).then(response => {
      console.log('STRINGTWO',id)
      if(response.data){
        return response.data
      }
    })
    return {
      type: GETTASK,
      payload: request
    }
  }

  export var addSubTask = (body) => {
    var request = axios.post('/api/subtask', body).then( response => {
      console.log(body)
      if(response.data){
        return response.data
      }
    })
    return {
      type: ADDSUBTASK,
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