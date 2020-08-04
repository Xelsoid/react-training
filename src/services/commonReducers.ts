import { ACTIONS } from '@root/src/services/constants';
import { createAction, createReducer } from '@reduxjs/toolkit';
import { PayloadInt, ActionInt } from '../interface';

const initialStore = {
  errors: {},
  loading: {},
};

export const handleFetchErrors = createAction<PayloadInt>(ACTIONS.HANDLE_FETCH_ERRORS);
export const handleLoading = createAction<PayloadInt>(ACTIONS.HANDLE_FETCH_LOADING);

export const commonReducers = createReducer(initialStore, {
  [handleFetchErrors.type]: (state, action: ActionInt) => {
    state.errors[action.payload.id] = action.payload.error;
  },
  [handleLoading.type]: (state, action: ActionInt) => {
    state.loading[action.payload.id] = action.payload.flag;
  },
});
