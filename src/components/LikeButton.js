import { AiFillLike, AiOutlineLike } from 'react-icons/ai';

const beforeLikeStyles =
  'bg-sky-600 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md';

const afterLikeStyles =
  'bg-zinc-100 border-black inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md';

const LikeButton = ({ toggleLike, handleClick }) => {
  return (
    <button
      className={toggleLike ? beforeLikeStyles : afterLikeStyles}
      onClick={handleClick}>
      {toggleLike ? 'Liked ' : 'Like '}
      {toggleLike ? <AiFillLike /> : <AiOutlineLike />}
    </button>
  );
};

export { LikeButton };
