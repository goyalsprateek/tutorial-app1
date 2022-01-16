import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userTypes";

const initialState = {
  loading: true,
  posts: [],
  errorMsg: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        loading: true,
        posts: [],
        errorMsg: "",
      };
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
        errorMsg: "",
      };
    case FETCH_USER_FAILURE:
      return {
        loading: false,
        posts: [],
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer