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
    return (<figure style={{height: 200, width: '100%', backgroundColor: 'hsla(206, 11%, 76%, 0.33)'}}>
      </figure>)
    
  }

  if (!isSkeleton) {
    return (
      <figure>
        <img src={url} alt={title} width='100%' height='auto' />
        <figcaption>{title}</figcaption>
        <h2>{earth_date}</h2>
        <p>{explanation}</p>
        <LikeButton toggleLike={toggleLike} handleClick={handleClick} />
      </figure>
    );
  }
};

export { ImageSection };
