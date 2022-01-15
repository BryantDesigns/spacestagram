import { AiFillLike, AiOutlineLike } from 'react-icons/ai';

const LikeButton = ({ toggleLike, handleClick }) => {
    return (
      <button className='' onClick={handleClick}>
        Like {toggleLike ? <AiFillLike /> : <AiOutlineLike />}
      </button>
    );
  };

export {LikeButton}
