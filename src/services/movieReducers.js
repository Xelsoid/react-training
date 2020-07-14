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

// export const fetchData = (method, resultHandler, fetchHandlerId) => (dispatch) => {
//   dispatch(handleLoading(fetchHandlerId, true));
//   dispatch(handleFetchErrors(fetchHandlerId, false));
//
//   method.then((res) => {
//     if (!res.ok) {
//       dispatch(handleLoading(fetchHandlerId, false));
//       return dispatch(handleFetchErrors(fetchHandlerId, 'Response is not okay'));
//     }
//     return res.json();
//   })
//     .then((res) => resultHandler(res))
//     .catch((error) => dispatch(handleFetchErrors(fetchHandlerId, error)))
//     .finally(() => dispatch(handleLoading(fetchHandlerId, false)));
// };

// export const fetchMoviesData = (searchQuery, searchByQuery, fetchHandlerId) => (dispatch) => {
//   const method = fetchMovies(searchQuery, searchByQuery);
//   const resultHandler = (res) => dispatch(addMoviesDataToStore(res));
//
//   dispatch(fetchData(method, resultHandler, fetchHandlerId));
// };

// export const fetchMovieData = (movieId, fetchHandlerId) => (dispatch) => {
//   const method = fetchMovie(movieId);
//   const resultHandler = (res) => {
//     dispatch(fetchMoviesData(res.genres[0], 'genres', fetchHandlerId));
//     dispatch(addMovieDataToStore(res));
//   };
//
//   dispatch(fetchData(method, resultHandler, fetchHandlerId));
// };

export const fetchMoviesDataRequest = (searchQuery, searchByQuery, handler) => ({
  type: ACTIONS.FETCH_MOVIES_DATA_REQUEST,
  payload: { searchQuery, searchByQuery, handler },
});

export const fetchMovieDataRequest = (movieId, fetchHandlerId) => ({
  type: ACTIONS.FETCH_MOVIE_DATA_REQUEST,
  payload: { movieId, fetchHandlerId },
});

// Sagas
export function* fetchMovieDataAsync(action) {
  const { movieId, fetchHandlerId } = action.payload;

  yield put(handleLoading(fetchHandlerId, true));
  yield put(handleFetchErrors(fetchHandlerId, false));
  const response = yield call(fetch, returnMovieUrl(movieId));
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
  const { searchQuery, searchByQuery, handler } = action.payload;

  yield put(handleLoading(handler, true));
  yield put(handleFetchErrors(handler, false));
  const response = yield call(fetch, returnMoviesUrl(searchQuery, searchByQuery));
  if (!response.ok) {
    yield put(handleLoading(handler, false));
    yield put(handleFetchErrors(handler, 'Response is not okay'));
  }
  const res = yield response.json();
  yield put(handleLoading(handler, false));
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
