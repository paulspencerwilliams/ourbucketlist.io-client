import { RETRIEVING, RETRIEVED, RECOMMENDATION_ERROR } from '../actionCreators/recommendation';

export default function (state = { recommendation: null }, action) {
  switch (action.type) {
    case RETRIEVING:
      return { ...state, recommendation: null, retrieving: true };
    case RETRIEVED:
      return { ...state, recommendation: action.payload, retrieving: false };
    case RECOMMENDATION_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
