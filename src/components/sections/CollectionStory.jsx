import { ArrowRight } from "lucide-react";
import { Layers } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeader from "../SectionHeader";

const CollectionStory = () => {
  return (
    <section className="bg-[#f8f8f8] px-28 pt-10 pb-20 flex flex-col gap-10">
      <SectionHeader
        badge="Our Story"
        icon={<Layers size={13} />}
        heading={
          <>
            Behind every piece, <br /> a purpose
          </>
        }
        ctaLabel="Learn more"
        ctaLink="/about"
      />

      {/* Split Layout */}
      <div className="grid grid-cols-2 gap-16 items-center">
        {/* Left — Image */}
        <div className="relative overflow-hidden rounded-3xl h-[520px]">
          <img
            src="https://framerusercontent.com/images/nvGX8w2EmNhLJbIVjLMsGKTV4I.jpeg"
            alt="Collection Story"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute bottom-5 left-5 bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 flex flex-col gap-0.5">
            <span className="font-mono text-white text-xs tracking-widest uppercase">
              AW 2025
            </span>
            <span className="text-white/60 text-xs">Arctic Minimal</span>
          </div>
        </div>

        {/* Right — Story */}
        <div className="flex flex-col gap-8">
          <span className="font-mono text-xs text-black/30 tracking-widest uppercase">
            Our Philosophy
          </span>
          <h2 className="font-display text-4xl font-medium leading-tight text-black">
            Clothes that work
            <br />
            harder, so you
            <br />
            don't have to.
          </h2>
          <p className="text-sm text-black/50 leading-relaxed">
            Velour collections are built around one idea — timeless cuts, honest
            materials, and details that reveal themselves slowly over time.
            Nothing loud. Nothing wasted.
          </p>

          <div className="flex items-center gap-8 py-6 border-t border-b border-black/6">
            {[
              ["12+", "Collections"],
              ["340", "Pieces"],
              ["10M+", "Worn Daily"],
            ].map(([num, label], i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="font-price text-2xl font-bold text-black tabular-nums">
                  {num}
                </span>
                <span className="font-mono text-xs text-black/30 tracking-widest uppercase">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="self-start flex items-center gap-2 bg-black text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-neutral-800 transition"
          >
            Read our Story <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CollectionStory;
