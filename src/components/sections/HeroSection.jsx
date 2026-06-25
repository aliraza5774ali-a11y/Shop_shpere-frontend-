import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import img1 from "../../assets/hero_01.avif";
import img2 from "../../assets/hero_02.avif";
import img3 from "../../assets/hero_03.avif";
import img4 from "../../assets/hero_04.avif";
import img5 from "../../assets/hero_05.avif";

const HERO_IMAGES = [img1, img2, img3, img4, img5];
const AUTOPLAY_INTERVAL = 6000; // ms

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goToNext, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, goToNext]);

  return (
    <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {HERO_IMAGES.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-900 ease-in-out"
            style={{ opacity: index === activeIndex ? 1 : 0 }}
          />
        ))}
      </div>
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

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <div className="flex items-center gap-2 rounded-full bg-black/20 p-1 pr-3 backdrop-blur-md">
          <button className="rounded-full bg-white px-3 py-1 text-sm font-medium text-black">
            Soft
          </button>
          <span className="text-sm font-medium text-white">
            Warm Winter Layers
          </span>
        </div>

        <h1 className="mt-6 text-5xl font-semibold leading-[1.1] text-white sm:text-6xl">
          Premium wear
          <br />
          for modern living
        </h1>

        <p className="mt-5 max-w-md text-base text-white/80">
          Discover our new range of soft clothes made for your daily look and
          your best days with the finest fabrics.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <Link
            to="/shops"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition hover:bg-gray-100"
          >
            See collection
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-white/30 bg-black/20 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-md transition hover:bg-black/30"
          >
            Contact us
          </Link>
        </div>
      </div>

      <div
        className="absolute right-6 top-1/2 z-10 flex -translate-y-1/2 flex-col items-end gap-2 sm:right-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {HERO_IMAGES.map((img, index) => {
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
                <img src={img} alt="" className="h-full w-full object-cover" />
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
              height: `${((activeIndex + 1) / HERO_IMAGES.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
