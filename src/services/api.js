const url = 'https://reactjs-cdp.herokuapp.com/movies';
export const fetchData = (searchQuery, searchByQuery) => fetch(`${url}?search=${searchQuery}&searchBy=${searchByQuery}`, {});
