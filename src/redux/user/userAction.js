import axios from 'axios'
import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userTypes";

export const fetchUsers = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (posts) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: posts,
  };
};

export const fetchUserFailure = (errorMsg) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: errorMsg,
  };
};

export const fetchPosts = () => {
  return (dispatch) =>{
    dispatch(fetchUsers())
    axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(res=>{
    dispatch(fetchUserSuccess(res.data))
  })
  .catch(err=>{
    dispatch(fetchUserFailure(err.message))
  })
  }
}

