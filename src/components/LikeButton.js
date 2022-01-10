import { AiFillLike, AiOutlineLike } from 'react-icons/ai';

const LikeButton = ({ toggleLike, handleClick }) => {
    return (
      <button onClick={handleClick}>
        {toggleLike ? <AiFillLike /> : <AiOutlineLike />}
      </button>
    );
  };

export {LikeButton}
