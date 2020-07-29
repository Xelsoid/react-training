import { ACTIONS } from '@root/src/services/constants';
import { createAction, createReducer } from '@reduxjs/toolkit';

const initialStore = {
  errors: {},
  loading: {},
};

export const handleFetchErrors = createAction(ACTIONS.HANDLE_FETCH_ERRORS);
export const handleLoading = createAction(ACTIONS.HANDLE_FETCH_LOADING);

export const commonReducers = createReducer(initialStore, {
  [handleFetchErrors]: (state, action) => {
    state.errors[action.payload.id] = action.payload.error;
  },
  [handleLoading]: (state, action) => {
    state.loading[action.payload.id] = action.payload.flag;
  },
});
