const url = 'https://reactjs-cdp.herokuapp.com/movies';

export const fetchMovies = (searchQuery, searchByQuery) => fetch(`${url}?search=${searchQuery}&searchBy=${searchByQuery}`, {});

export const fetchMovie = (id) => fetch(`${url}/${id}`, {});
