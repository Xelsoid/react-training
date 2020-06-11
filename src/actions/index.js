import ACTIONS from '@constants/ACTIONS';

export const addMoviesDataToStore = (data) => ({
  type: ACTIONS.STORE_MOVIES,
  payload: data,
});

export const testFirstAction = () => ({
  type: ACTIONS.TEST,
  payload: 'green',
});
