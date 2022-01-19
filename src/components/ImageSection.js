import { useState } from 'react';
import { updateLocalStorageById } from '../utilities/utilities';
import { LikeButton } from './index.js';

const ImageSection = (props) => {
  const {
    id = '',
    title = '',
    url = '',
    earth_date = '',
    explanation = '',
    isLiked = false,
    isSkeleton = false,
  } = props;
  const [toggleLike, setToggleLike] = useState(isLiked);
  const handleClick = () => {
    setToggleLike(!toggleLike);
    updateLocalStorageById(id, toggleLike);
  };
  if (isSkeleton) {
    return (
      <section className='text-gray-700 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div>Loading</div>
          <div className='flex flex-wrap -m-4'>
            <div className='p-4 md:w-full'>
              <div className='h-full border-2 border-gray-200 rounded-lg overflow-hidden'>
                <div className='lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center'></div>
                <div className='p-6'>
                  <h2 className='bg-gray-400 animate-pulse h-4 w-1/4 mb-2'></h2>
                  <h1 className='w-1/2 mb-4 h-6 animate-pulse bg-gray-500'></h1>
                  <p className='leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400'></p>
                  <p className='leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400'></p>
                  <p className='leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400'></p>
                  <div className='flex items-center flex-wrap '>
                    <a className='bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0'></a>
                    <span className='bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1'></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!isSkeleton) {
    return (
      <>
        <div className='transition duration-300 transform rounded shadow-lg hover:-translate-y-1 hover:shadow md:text-center'>
          <div className='relative'>
            <img src={url} alt={title} width='100%' height='auto' />
          </div>
          <div className='px-6 py-8 rounded-b sm:px-8'>
            <h2 className='mb-2 text-xl font-bold leading-none sm:text-2xl'>
              {title}
            </h2>
            <h3>{earth_date}</h3>
            <p className='mb-5 text-gray-800 '>{explanation}</p>
            <LikeButton toggleLike={toggleLike} handleClick={handleClick} />
          </div>
        </div>
      </>
    );
  }
};

export { ImageSection };
