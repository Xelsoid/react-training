const url: string = 'https://reactjs-cdp.herokuapp.com/movies';

export const fetchMovies = (searchQuery: string, searchByQuery: string) => fetch(`${url}?search=${searchQuery}&searchBy=${searchByQuery}`, {});

export const fetchMovie = (id: string) => fetch(`${url}/${id}`, {});
