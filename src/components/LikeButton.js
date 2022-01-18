import { AiFillLike, AiOutlineLike } from 'react-icons/ai';

const LikeButton = ({ toggleLike, handleClick }) => {
    return (
      <button
        className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
        onClick={handleClick}>
        Like {toggleLike ? <AiFillLike /> : <AiOutlineLike />}
      </button>
    );
  };

export { LikeButton }
