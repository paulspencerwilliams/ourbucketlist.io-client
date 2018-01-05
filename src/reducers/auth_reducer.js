import { AUTHENTICATED, UNAUTHENTICATED, AUTHENTICATION_ERROR } from '../actionCreators/auth';

export default function (state = { authenticated: false }, action) {
  switch (action.type) {
    case AUTHENTICATED:
      return { ...state, authenticated: true };
    case UNAUTHENTICATED:
      return { ...state, authenticated: false };
    case AUTHENTICATION_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
