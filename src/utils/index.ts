import * as React from 'react';
export const formatIncomingData = (incomingData: string) => {
  const data = incomingData;
  const keyArray = Object.keys(data).filter((element) => (/_/).test(element));
  keyArray.forEach((element) => {
    let elemArray = element.split('_');
    const elemValue = data[element];
    elemArray = elemArray.map((elem, index) => {
      if (index) {
        return elem.charAt(0).toUpperCase() + elem.slice(1);
      }
      return elem;
    });
    const elemStr = elemArray.join('');
    delete data[element];
    data[elemStr] = elemValue;
  });

  return data;
};

interface FilmProps {
    id: number;
    title: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    poster_path: string;
    overview: string;
    budget: number;
    revenue: number;
    genres: string[];
    runtime: number;
}

export const sortByReleaseDate = (array: Array<FilmProps>) => array.sort((a, b) => (
  new Date(b.release_date).getTime() - new Date(a.release_date).getTime()));

export const sortByRating = (array: Array<FilmProps>) => array.sort((a, b) => (
  b.vote_average - a.vote_average));

export const addImageFallback = (event: React.InvalidEvent<HTMLImageElement>) => {
  const element = event.target;
  element.src = 'https://via.placeholder.com/500x750';
};
