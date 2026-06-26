import BestSeller from "../components/sections/BestSeller";
import BlogSection from "../components/sections/BlogSection";
import CollectionSection from "../components/sections/CollectionSection";
import HeroSection from "../components/sections/HeroSection";
import ProductSection from "../components/sections/ProductSection";
import ReviewSection from "../components/sections/ReviewSection";
import StyleWearSection from "../components/sections/StyleWearSection";
import VideoSection from "../components/sections/VideoSection";

import img1 from "../assets/hero_01.avif";
import img2 from "../assets/hero_02.avif";
import img3 from "../assets/hero_03.avif";
import img4 from "../assets/hero_04.avif";
import img5 from "../assets/hero_05.avif";

const Home = () => {
  return (
    <>
      <HeroSection
        images={[img1, img2, img3, img4, img5]}
        badge={{ label: "Soft", text: "Warm Winter Layers" }}
        heading={
          <>
            Premium wear
            <br />
            for modern living
          </>
        }
        subtext="Discover our new range of soft clothes made for your daily look."
        primaryLabel="See Collection"
      />
      <ProductSection />
      <VideoSection />
      <BestSeller />
      <CollectionSection />
      <ReviewSection />
      <StyleWearSection />
      <BlogSection />
    </>
  );
};

export default Home;
