import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';
import recommendationReducer from './recommendation_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  recommendation: recommendationReducer,
});

export default rootReducer;
