import {
    FETCH_IMAGE_START,
    FETCH_IMAGE_SUCCESS,
    FETCH_IMAGE_FAILURE
} from '../actions/action';


const initialState = {
  images: null,
  isFetching: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGE_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_IMAGE_SUCCESS:
      return {
        ...state,
        images: action.payload,
        isFetching: false,
        error: "",
      };
      case FETCH_IMAGE_FAILURE:
          return {
              ...state,
              isFetching: false,
              error: action.payload
          };
          default: 
          return state;
  }
};

export default reducer;
