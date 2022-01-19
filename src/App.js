import React, { useState, useEffect } from 'react';
import {
  setLocalStorage,
  getLocalStorage,
  addNewPropsToNasaData,
  skeletonArray,
} from './utilities/utilities';
import { getNasaData } from './api';
import { ImageSection } from './components';
import { Header } from './components/Header';
import './App.css';
import { Footer } from './components/Footer';

const App = () => {
  const [imagesData, setImagesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const localData = getLocalStorage();
      // if local storage exists use that data
      if (localData.length > 0) {
        setImagesData(localData);
      } else {
        // fetch data from nasa if no local storage
        getNasaData().then((nasaArrData) => {
          const newMapData = addNewPropsToNasaData(nasaArrData);
          setLocalStorage(newMapData);
          setImagesData(newMapData);
        });
      }
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className='container mx-auto '>
      {/* {loading && <progress max={100} />} */}
      <Header />
      <main className='grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-2'>
        {loading === true &&
          skeletonArray.map(({ id }) => {
            return <ImageSection key={id} isSkeleton={true} />;
          })}
        {loading === false &&
          imagesData.length > 0 &&
          imagesData.map(
            ({ title, url, earth_date, explanation, isLiked, id }) => {
              return (
                <ImageSection
                  key={id}
                  id={id}
                  title={title}
                  url={url}
                  earth_date={earth_date}
                  explanation={explanation}
                  isLiked={isLiked}
                />
              );
            }
          )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
