import { ArrowRight } from "lucide-react";
import SectionHeader from "../SectionHeader";
import { Layers } from "lucide-react";

const COLLECTIONS = [
  {
    label: "AW 2025",
    name: "Arctic Minimal",
    desc: "Clean cuts and muted tones inspired by the stillness of winter landscapes.",
    image: "https://framerusercontent.com/images/g813yVl0fq2gEobS7kOZx537SY.jpg",
    tag: "New Season",
  },
  {
    label: "SS 2025",
    name: "Urban Warmth",
    desc: "Relaxed silhouettes built for the city — soft fabrics, sharp details.",
    image: "https://framerusercontent.com/images/Or4CSjqekPU2Ug6V0zSDTbgtg.jpg",
    tag: "Bestseller",
  },
  {
    label: "Resort 2025",
    name: "Quiet Luxury",
    desc: "Premium essentials that carry you from morning light to evening ease.",
    image: "https://framerusercontent.com/images/YI6OX1Ix0QFPJHufS272fscYaI.jpg",
    tag: "Limited",
  },
];

const CollectionCard = () => {
  return (
    <section className="bg-[#f8f8f8] px-28 pt-10 pb-16 flex flex-col gap-10">

      <SectionHeader
        badge="Current Collections"
        icon={<Layers size={13} />}
        heading={<>Curated drops, <br /> built to last</>}
        ctaLabel="View all"
        ctaLink="/collection"
      />

      <div className="grid grid-cols-3 gap-5">
        {COLLECTIONS.map((col, i) => (
          <div key={i} className="group relative overflow-hidden rounded-2xl cursor-pointer" style={{ aspectRatio: '3/4' }}>
            <img
              src={col.image}
              alt={col.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <span className="absolute top-4 left-4 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">
              {col.tag}
            </span>

            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2">
                <span className="font-mono text-xs text-white/50 tracking-widest uppercase">{col.label}</span>
              <h4 className="font-display text-2xl font-medium text-white tracking-tight">{col.name}</h4>
              <p className="text-xs text-white/60 leading-relaxed">{col.desc}</p>
              <button className="mt-3 self-start flex items-center gap-2 bg-white text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-white/90 transition">
                Explore <ArrowRight size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default CollectionCard;