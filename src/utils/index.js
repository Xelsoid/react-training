// eslint-disable-next-line import/prefer-default-export
export const formatIncomingData = (incomingData) => {
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
    elemArray = elemArray.join('');
    delete data[element];
    data[elemArray] = elemValue;
  });

  return data;
};

export const sortByReleaseDate = (array) => array.sort((a, b) => (
  new Date(b.release_date) - new Date(a.release_date)));

export const sortByRating = (array) => array.sort((a, b) => (b.vote_average - a.vote_average));

export const addImageFallback = (event) => {
  const element = event.target;
  element.src = 'https://via.placeholder.com/500x750';
};
