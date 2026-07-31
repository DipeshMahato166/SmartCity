import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Card = ({ props }) => {
  const navigate = useNavigate();

  return (
    <div className="group flex h-full flex-col justify-between rounded-xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-6">
      
      {/* Card Content */}
      <div>
        {/* Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-600 text-xl text-white">
          {props.icon}
        </div>

        {/* Title */}
        <h3 className="mt-5 text-lg font-bold text-gray-900 sm:text-xl ">
          {props.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
          {props.content}
        </p>
      </div>

      {/* Button */}
      <div className="mt-6">
        <button
          onClick={() => navigate(props.link)}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#2c5d79] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#234b61] hover:shadow-lg cursor-pointer"
        >
          <span>Get Started</span>
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default Card;