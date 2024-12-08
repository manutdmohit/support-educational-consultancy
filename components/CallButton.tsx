import { FaCommentDots } from 'react-icons/fa';

const number = '+9779851036204';

const CallButton = () => {
  return (
    <a href={`tel:${number}`} className="fixed bottom-5 right-1 md:right-0 ">
      <div className="flex items-center justify-center w-16 h-16 md:w-12 md:h-12 bg-green-500 rounded-full shadow-lg transition-transform transform hover:scale-110 animate-pulse">
        <FaCommentDots className="text-white text-3xl md:text-2xl" />
      </div>
    </a>
  );
};

export default CallButton;
