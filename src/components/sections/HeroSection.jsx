import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const AUTOPLAY_INTERVAL = 6000;

const HeroSection = ({
  images = [],
  badge,
  heading,
  subtext,
  primaryLink = "/shops",
  primaryLabel = "See Collection",
  secondaryLink = "/contact",
  secondaryLabel = "Contact us",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const isSlider = images.length > 1;

  const goToNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isSlider || isPaused) return;
    const timer = setInterval(goToNext, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, goToNext, isSlider]);

  return (
    <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden">
      {/* Images */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-900 ease-in-out"
            style={{
              opacity: index === activeIndex ? 1 : 0,
              transform: "scale(1.12)",
            }}
          />
        ))}
      </div>

      {/* Overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg,rgba(0,0,0,0.88) 0%,rgba(0,0,0,0.3) 60%,rgba(0,0,0,0.08) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg,rgba(0,0,0,0.80) 0%,transparent 50%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center mt-24">
        {badge && (
          <div
            className="inline-flex items-center gap-2 rounded-full backdrop-blur-sm"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
          >
            <div className="rounded-full bg-white px-3 py-1">
              <span className="text-xs font-medium text-black">
                {badge.label}
              </span>
            </div>
            <span className="text-xs font-medium text-white/90 pr-3 py-1">
              {badge.text}
            </span>
          </div>
        )}

        <h1 className="mt-6 text-5xl font-semibold leading-[1.1] text-white sm:text-6xl">
          {heading}
        </h1>

        {subtext && (
          <p className="mt-4 max-w-md text-sm text-white/70 leading-relaxed">
            {subtext}
          </p>
        )}

        <div className="mt-8 flex items-center gap-3">
          <Link
            to={primaryLink}
            className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition hover:bg-white/90"
          >
            {primaryLabel}
          </Link>
          <Link
            to={secondaryLink}
            className="rounded-full px-6 py-2.5 text-sm font-medium text-white border border-white/30 backdrop-blur-sm transition hover:bg-white/10"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>

      {/* Slider controls — only when multiple images */}
      {isSlider && (
        <div
          className="absolute right-6 top-1/2 z-10 flex -translate-y-1/2 flex-col items-end gap-2 sm:right-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {images.map((img, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={`View look ${index + 1}`}
                className="group flex items-center gap-3"
              >
                <span
                  className={`overflow-hidden rounded-md transition-all duration-300 ${
                    isActive ? "h-14 w-10 opacity-100" : "h-0 w-0 opacity-0"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </span>
                <span
                  className={`font-serif tabular-nums transition-all duration-300 ${
                    isActive
                      ? "text-3xl text-white"
                      : "text-base text-white/40 group-hover:text-white/70"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            );
          })}
          <div className="mt-1 h-16 w-px bg-white/20">
            <div
              className="w-px bg-white transition-all duration-500"
              style={{
                height: `${((activeIndex + 1) / images.length) * 100}%`,
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
