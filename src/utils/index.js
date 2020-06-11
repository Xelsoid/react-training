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

export const makeFetch = (url, params = {}, successCallback, errorCallback, fetchErrorCallback) => {
  fetch(url, params)
    .then((res) => {
      if (!res.ok) {
        errorCallback(res);
      }
      return res.json();
    })
    .then((res) => successCallback(res))
    .catch((error) => fetchErrorCallback(error));
};
