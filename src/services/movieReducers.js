import { sortByReleaseDate, sortByRating } from '@utils/index';
import { returnMoviesUrl, returnMovieUrl } from '@api';
import { handleFetchErrors, handleLoading } from '@root/src/services/commonReducers';
import { ACTIONS } from '@root/src/services/constants';
import {
  call, put, all, takeLatest,
} from 'redux-saga/effects';

const initialStore = {
  moviesData: {},
  movieData: {},
};

export const addMoviesDataToStore = (data) => ({
  type: ACTIONS.STORE_MOVIES,
  payload: data,
});

export const addMovieDataToStore = (data) => ({
  type: ACTIONS.STORE_MOVIE,
  payload: data,
});

export const clearMoviesDataFromStore = () => ({
  type: ACTIONS.CLEAR_STORE_MOVIES,
});

export const filterByReleaseDate = () => ({
  type: ACTIONS.FILTER_BY_RELEASE_DATE,
});

export const filterByRating = () => ({
  type: ACTIONS.FILTER_BY_RATING,
});

export const fetchMoviesDataRequest = (searchQuery, searchByQuery, handler) => {
  const url = returnMoviesUrl(searchQuery, searchByQuery);
  return {
    type: ACTIONS.FETCH_MOVIES_DATA_REQUEST,
    payload: { url, handler },
  };
};

export const fetchMovieDataRequest = (movieId, fetchHandlerId) => {
  const url = returnMovieUrl(movieId);
  return {
    type: ACTIONS.FETCH_MOVIE_DATA_REQUEST,
    payload: { url, fetchHandlerId },
  };
};

// Sagas
export function* fetchMovieDataAsync(action) {
  const { url, fetchHandlerId } = action.payload;

  yield put(handleLoading(fetchHandlerId, true));
  yield put(handleFetchErrors(fetchHandlerId, false));
  const response = yield call(fetch, url);
  if (!response.ok) {
    yield put(handleLoading(fetchHandlerId, false));
    yield put(handleFetchErrors(fetchHandlerId, 'Response is not okay'));
  }
  const res = yield response.json();
  yield put(handleLoading(fetchHandlerId, false));
  yield put(fetchMoviesDataRequest(res.genres[0], 'genres', fetchHandlerId));
  yield put(addMovieDataToStore(res));
}

export function* watchFetchMovieDataAsync() {
  yield takeLatest(ACTIONS.FETCH_MOVIE_DATA_REQUEST, fetchMovieDataAsync);
}

export function* fetchMoviesDataAsync(action) {
  const { url, fetchHandlerId } = action.payload;

  yield put(handleLoading(fetchHandlerId, true));
  yield put(handleFetchErrors(fetchHandlerId, false));
  const response = yield call(fetch, url);
  if (!response.ok) {
    yield put(handleLoading(fetchHandlerId, false));
    yield put(handleFetchErrors(fetchHandlerId, 'Response is not okay'));
  }
  const res = yield response.json();
  yield put(handleLoading(fetchHandlerId, false));
  yield put(addMoviesDataToStore(res));
}

export function* watchFetchMoviesDataAsync() {
  yield takeLatest(ACTIONS.FETCH_MOVIES_DATA_REQUEST, fetchMoviesDataAsync);
}

// Users Saga
export function* moviesSaga() {
  yield all([
    watchFetchMoviesDataAsync(),
    watchFetchMovieDataAsync(),
  ]);
}

export const movieReducers = (state = initialStore, action) => {
  switch (action.type) {
    case ACTIONS.STORE_MOVIES:
      return { ...state, moviesData: action.payload };

    case ACTIONS.STORE_MOVIE:
      return { ...state, movieData: action.payload };

    case ACTIONS.CLEAR_STORE_MOVIES:
      return { ...state, moviesData: {} };

    case ACTIONS.FILTER_BY_RELEASE_DATE:
      return {
        ...state,
        moviesData: {
          ...state.moviesData,
          data: sortByReleaseDate(state.moviesData.data),
        },
      };

    case ACTIONS.FILTER_BY_RATING:
      return {
        ...state,
        moviesData: {
          ...state.moviesData,
          data: sortByRating(state.moviesData.data),
        },
      };

    default:
      return state;
  }
};
