import { useState } from "react";
import money from "../assets/money.svg";

const CollectionCard = ({
  images,
  wearType,
  wearBadge,
  title1,
  title2,
  priceFrom,
  priceTo,
  reverse = false,
}) => {
  const [current, setCurrent] = useState(0);

  return (
    <div
      className={`flex h-120 w-full gap-4 ${reverse ? "flex-row-reverse" : "flex-row"}`}
    >
      {/* Left — Image Carousel */}
      <div className="relative w-1/2 rounded-2xl overflow-hidden">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Collection ${i + 1}`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: i === current ? 1 : 0 }}
          />
        ))}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-300"
              style={{
                width: i === current ? "28px" : "8px",
                height: "8px",
                borderRadius: "999px",
                background: i === current ? "#ffffff" : "rgba(255,255,255,0.4)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Right — Info Panel */}
      <div className="w-1/2 bg-[#eeeeee] rounded-2xl p-8 flex flex-col gap-8 justify-center">
        <div className="flex flex-col gap-4">
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-black/10 bg-white text-xs font-medium text-black shadow-sm overflow-hidden">
            <p className="bg-black rounded-full px-3 py-1.5 text-white text-xs">
              {wearBadge}
            </p>
            <span className="pr-3">{wearType}</span>
          </span>
          <h2 className="text-4xl font-semibold leading-tight tracking-wide text-black">
            {title1} <br /> {title2}
          </h2>
          <p className="text-sm text-black/60 leading-relaxed max-w-100">
            Upgrade your daily look with our crafted pieces made from the finest
            fabrics for lasting comfort and timeless style.
          </p>
        </div>

        <div className="bg-white rounded-xl p-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#eeeeee] rounded-lg p-2">
              <img
                src={money}
                alt="pricing"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div>
              <p className="text-xs text-black/40 font-medium">
                Pricing starts from
              </p>
              <p className="text-base font-bold text-black">
                {priceFrom} — {priceTo}
              </p>
            </div>
          </div>
          <button className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 whitespace-nowrap">
            All collections
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
