import HeroSection from "../components/sections/HeroSection";
import { ArrowRight } from "lucide-react";
import hero01 from "../assets/collectionHero.jpg";
import CollectionStory from "../components/sections/CollectionStory";
import CollectionCard from "../components/sections/CollectionCard";
import ProductSection from "../components/sections/ProductSection";

const Collection = () => {
  return (
    <div>
      {/* Hero */}
      <HeroSection
        images={[hero01]}
        badge={{ label: "Collections", text: "Curated for you" }}
        heading={
          <>
            Discover pieces
            <br />
            made to last
          </>
        }
        subtext="Every collection is built around timeless silhouettes, premium materials, and quiet confidence."
        primaryLabel="Shop Now"
        secondaryLabel="Our Story"
        primaryLink="/shops"
        secondaryLink="/about"
        isHero={false}
      />

      {/* Collection Story */}
      <CollectionStory />

      <CollectionCard />

      {/* Featured Look — full width editorial */}
      <div className="bg-[#f8f8f8] px-28 py-4 pb-16">
        <div className="relative overflow-hidden rounded-3xl h-[500px]">
          <img
            src="https://framerusercontent.com/images/HaLbFMQL3UBYnLDE5V1KjUjLbU.jpg"
            alt="Featured Look"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-16 gap-4 max-w-lg">
            <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
              Featured Look
            </span>
            <h3 className="font-display text-4xl font-medium text-white leading-tight">
              The Signature
              <br />
              Winter Edit
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Our most refined pieces brought together — layered, minimal, and
              built to move with you.
            </p>
            <button className="self-start flex items-center gap-2 bg-white text-black text-sm font-medium px-6 py-2.5 rounded-full hover:bg-white/90 transition mt-2">
              Shop the Look <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <ProductSection />
    </div>
  );
};

export default Collection;
