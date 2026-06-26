import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { LuSparkles } from "react-icons/lu";

const SampleProduct = ({ img1, img2, title, price, discount }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col gap-3 cursor-pointer">
      {/* Image Card */}
      <div
        className="relative bg-[#ebebeb] rounded-2xl overflow-hidden flex items-center justify-center h-96"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Badge */}
        <span className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 bg-white rounded-full px-3 py-1 text-xs font-medium text-black shadow-sm">
          <LuSparkles size={11} />
          New
        </span>

        {/* Image */}
        <img
          src={hovered ? img2 : img1}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
        />

        {/* Arrow button */}
        <div
          className={`absolute top-3 right-3 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 ${
            hovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <ArrowRight
            size={20}
            className={`absolute transition-all duration-300 -rotate-45 ${
              hovered
                ? "-translate-x-5 translate-y-5 opacity-0"
                : "translate-x-0 translate-y-0 opacity-100"
            }`}
          />
          <ArrowRight
            size={20}
            className={`absolute transition-all duration-300 -rotate-45 ${
              hovered
                ? "translate-x-0 translate-y-0 opacity-100"
                : "translate-x-5 -translate-y-5 opacity-0"
            }`}
          />
        </div>
      </div>

      {/* Info Row */}
      <div className="flex items-center justify-between px-1">
        <div className="flex flex-col gap-0.5">
          <p className="text-base font-semibold text-black">{title}</p>
          <div className="flex items-center gap-2">
            <span className="font-price text-sm font-bold text-black tabular-nums">
              {price}
            </span>
            <span className="font-price text-sm text-black/30 line-through tabular-nums">
              {discount}
            </span>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex items-center gap-1">
          <div
            className={`h-8 w-8 rounded-full overflow-hidden border shadow-sm transition-all duration-200 ${!hovered ? "border-black" : "border-transparent"}`}
          >
            <img src={img1} alt="" className="w-full h-full object-cover" />
          </div>
          <div
            className={`h-8 w-8 rounded-full overflow-hidden border shadow-sm transition-all duration-200 ${hovered ? "border-black" : "border-transparent"}`}
          >
            <img src={img2} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SampleProduct;
