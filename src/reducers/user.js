import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  LOGOUT,
  FETCH_USER,
    FETCH_USER_DRINKS,
    FETCH_USER_COCKTAILS,
    FETCH_USER_BARS
} from '../constants/User';

const initialState = {
    uid:'',
  role: '',
  name: '',
    email: '',
    img: '',
  isAuthenticated: false,
    drinks: [],
    cocktails: [],
    bars: [],
};
export default function userstate(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
          uid: action.payload.uid,
        role: action.payload.role,
        name: action.payload.name,
          email: action.payload.email,
          img: action.payload.img,
        isAuthenticated: action.payload.isAuthenticated,
          drinks: action.payload.drinks,
          cocktails: action.payload.cocktails,
          bars: action.payload.bars,
      };
    case FETCH_USER:
      return {
        ...state,
        name: action.payload.name,
        id: action.payload.id,
          email: action.payload.email,
          img: action.payload.image
      };
    case FETCH_USER_DRINKS:
      return {
        ...state,
        drinks: action.payload.drinks
      };
      case FETCH_USER_COCKTAILS:
          return {
              ...state,
              cocktails: action.payload.cocktails
          };
      case FETCH_USER_BARS:
          return {
              ...state,
              bars: action.payload.bars
          };
    case LOGOUT:
      return {
        ...state,
        name: '',
        role: '',
          uid: '',
          email:'',
          img: '',
        isAuthenticated: false
      };
    case LOGIN_FAIL:
      return {
        ...state, name: '', uid: '' , isAuthenticated: false
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        role: action.payload.role,
        isAuthenticated: action.payload.isAuthenticated
      };

    case SIGNUP_FAIL:
      return {
        ...state, isAuthenticated: false
      };
    default:
      return state
  }
}
