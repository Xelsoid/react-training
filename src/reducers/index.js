import ACTIONS from '@constants/ACTIONS';

export default (state, action) => {
  switch (action.type) {
    // case ACTIONS.TEST:
    //   return action.payload;

    case ACTIONS.STORE_MOVIES:
      return { ...state, moviesData: action.payload };

    default:
      return state;
  }
};
