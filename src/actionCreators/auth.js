import axios from 'axios';

export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authenticated_error';

const URL = 'http://localhost:8080';

export function signInAction({ email, password }, history) {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${URL}/signin`, { email, password });

      dispatch({ type: AUTHENTICATED });
      localStorage.setItem('user', res.data.token);
      history.push('/homepage');
    } catch (error) {
      if (error.response) {
        dispatch({
          type: AUTHENTICATION_ERROR,
          payload: 'Invalid email or password',
        });
      } else {
        dispatch({
          type: AUTHENTICATION_ERROR,
          payload: 'General error, please try later',
        });
      }
    }
  };
}
