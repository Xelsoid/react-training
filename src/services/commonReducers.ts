import { ACTIONS } from '@root/src/services/constants';
import { createAction, createReducer } from '@reduxjs/toolkit';

const initialStore = {
  errors: {},
  loading: {},
};

interface PayloadProps {
    id: string;
    error?: boolean | string;
    flag?: boolean;
}

interface ActionProps {
    payload: PayloadProps
}

export const handleFetchErrors = createAction<PayloadProps>(ACTIONS.HANDLE_FETCH_ERRORS);
export const handleLoading = createAction<PayloadProps>(ACTIONS.HANDLE_FETCH_LOADING);

export const commonReducers = createReducer(initialStore, {
  [handleFetchErrors.type]: (state, action: ActionProps) => {
    state.errors[action.payload.id] = action.payload.error;
  },
  [handleLoading.type]: (state, action: ActionProps) => {
    state.loading[action.payload.id] = action.payload.flag;
  },
});
