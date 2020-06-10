import ACTIONS from '@constants/ACTIONS';
const initialState = { color: 'blue' };

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.TEST:
      return { color: action.payload };

    default:
      return state;
  }
};
