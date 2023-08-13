import { IoMdArrowDropup } from 'react-icons/io';

const ScrollToTop = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <button
      className="flex items-center justify-center mx-auto right-8 bottom-8 fixed rounded w-6 h-6 bg-[#1b1f22] hover:shadow z-50"
      onClick={handleClick}
    >
      <IoMdArrowDropup />
    </button>
  );
};

export default ScrollToTop;
