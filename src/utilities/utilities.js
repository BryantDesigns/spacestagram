import { v4 as uuidv4 } from 'uuid';

const setLocalStorage = (data) => {
  window.localStorage.setItem('data', JSON.stringify(data));
};

const getLocalStorage = () => {
  try {
    const json = window.localStorage.getItem('data');
    if (json === undefined || json === null) {
      return [];
    } else {
      return JSON.parse(json);
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

const updateLocalStorageById = (id = '', toggleLike = false) => {
  const localData = getLocalStorage();
  const newLocalStorageData = localData.map((imageObj) => {
    if (imageObj.id === id) {
      imageObj.isLiked = !toggleLike;
      return imageObj;
    } else return imageObj;
  });
  setLocalStorage(newLocalStorageData);
};

const addNewPropsToNasaData = (nasaJson) => {
  const newCopyJson = nasaJson.map((imgObj) => {
    const earth_date = imgObj.date;
    delete imgObj.date;
    imgObj.earth_date = earth_date;
    // add like & id
    imgObj.isLiked = false;
    imgObj.id = uuidv4();
    return imgObj;
  });
  return newCopyJson;
};

const skeletonArray = Array.from({length: 5}, (value) => {
  return { id : uuidv4() }
})

export { setLocalStorage, getLocalStorage, addNewPropsToNasaData, updateLocalStorageById, skeletonArray };
