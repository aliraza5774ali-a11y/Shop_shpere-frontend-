import { useEffect, useRef } from "react";
import video from "../../assets/video_shop.mp4";
import { Link } from "react-router-dom";

const VideoSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <video
        ref={videoRef}
        src={video}
        loop
        preload="auto"
        playsInline
        muted
        autoPlay
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "50% 50%" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto flex min-h-100 max-w-300 flex-col items-center justify-center px-4 py-8 text-center sm:px-6 md:min-h-100 md:px-8 lg:min-h-100 lg:px-12">
        {/* Brand Badge */}
        <div
          className="inline-flex items-center gap-1 rounded-full  backdrop-blur-[5px]"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
        >
          <div className="rounded-full bg-white px-2">
            <span className="font-display text-xs font-medium tracking-tight text-black">
              Wearix
            </span>
          </div>
          <span className="text-[14px] pr-2 py-1 font-medium text-white/90">
            Since 2014
          </span>
        </div>

        {/* Text */}
        <div className="mt-6 max-w-xl">
          <h2
            className="font-display text-3xl font-medium text-white sm:text-4xl md:text-5xl"
            style={{ textWrap: "balance" }}
          >
            Defining modern style
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
            A decade ago, we set out to redefine the modern silhouette. Today,
            we merge urban utility with high-end aesthetics in a resilient,
            beautiful collection.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex items-center gap-3">
          {/* More About Us — white bg */}
          <Link
            to="/about"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[15px] font-medium tracking-tight text-black transition-all duration-300 hover:bg-white/90"
          >
            More About Us
          </Link>

          {/* Contact Us — glass bg */}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-[15px] font-medium tracking-tight text-white transition-all duration-300 hover:bg-white/20 backdrop-blur-[5px]"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;