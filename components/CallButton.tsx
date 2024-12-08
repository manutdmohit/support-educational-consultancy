import { FaCommentDots } from 'react-icons/fa';

const number = '+977015920126';

const CallButton = () => {
  return (
    <a href={`tel:${number}`} className="fixed bottom-5 right-0">
      <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full shadow-lg transition-transform transform hover:scale-110 animate-pulse">
        <FaCommentDots className="text-white text-2xl" />
      </div>
    </a>
  );
};

export default CallButton;
