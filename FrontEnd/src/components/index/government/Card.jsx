
import { FaArrowRight } from "react-icons/fa6";

const Card = ({
  icon,
  title,
  description,
  category,
  link,
}) => {
  return (
    <div className="group flex flex-col border border-slate-600 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      
      {/* Icon & Category */}
      <div className="mb-5 flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2c5d79] text-2xl text-white">
          {icon}
        </div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
          {category}
        </span>
      </div>

      {/* Title */}
      <h2 className="mb-3 text-xl font-bold text-gray-800">
        {title}
      </h2>

      {/* Description */}
      <p className="grow text-sm leading-6 text-gray-600">
        {description}
      </p>

      {/* Button */}
      <div className="mt-6">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#2c5d79] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#234b61] hover:gap-3 hover:shadow-lg"
        >
          Open Service
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default Card;