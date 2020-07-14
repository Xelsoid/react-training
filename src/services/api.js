const url = 'https://reactjs-cdp.herokuapp.com/movies';

export const returnMoviesUrl = (searchQuery, searchByQuery) => `${url}?search=${searchQuery}&searchBy=${searchByQuery}`;
export const returnMovieUrl = (id) => `${url}/${id}`;
