import axios from 'axios';

export const RETRIEVING = 'retrieving_recommendation';
export const RETRIEVED = 'retrieved_recommendation';
export const RECOMMENDATION_ERROR = 'retrieving_recommendation_error';

const URL = 'http://localhost:8080';

export function retrieveRecommendationAction() {
  return async (dispatch) => {
    try {
      const authHeader = `Token ${localStorage.getItem('user')}`;
      dispatch({ type: RETRIEVING });
      const res = await axios.get(`${URL}/recommendation`, { headers: { Authorization: authHeader } });
      dispatch({ type: RETRIEVED, payload: res.data });
    } catch (error) {
      dispatch({
        type: RECOMMENDATION_ERROR,
        payload: 'General error, failed to retrieve recommendation',
      });
    }
  };
}
