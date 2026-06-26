import hero1 from "../assets/aboutImage.avif";
import AboutSection from "../components/sections/AboutSection";
import HeroSection from "../components/sections/HeroSection";
import PartnersSection from "../components/sections/PartnerSection";

const About = () => {
  return (
    <div>
      <HeroSection
        images={[hero1]}
        badge={{ label: "About", text: "Know about Wearix" }}
        heading={
          <>
            Timeless design,
            <br />
            modern wearability
          </>
        }
        subtext="We focus on creating essential garments that remain relevant, functional, and refined across seasons."
        primaryLabel="Browse Collection"
        secondaryLabel="Contact us"
        isHero={false}
      />
      <PartnersSection/>
      <AboutSection/>
    </div>
  );
};

export default About;
