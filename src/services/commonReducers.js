import { ACTIONS } from '@root/src/services/constants';

const initialStore = {
  errors: {},
  loading: {},
};

export const handleFetchErrors = (id, error) => ({
  type: ACTIONS.HANDLE_FETCH_ERRORS,
  payload: {
    id,
    error,
  },
});

export const handleLoading = (id, flag) => ({
  type: ACTIONS.HANDLE_FETCH_LOADING,
  payload: {
    id,
    flag,
  },
});

export const commonReducers = (state = initialStore, action) => {
  switch (action.type) {
    case ACTIONS.HANDLE_FETCH_ERRORS:
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload.id]: action.payload.error,
        },
      };

    case ACTIONS.HANDLE_FETCH_LOADING:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.payload.id]: action.payload.flag,
        },
      };

    default:
      return state;
  }
};
