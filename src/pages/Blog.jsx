import { useState } from "react";
import HeroSection from "../components/sections/HeroSection";
import blogHero from "../assets/blog_01.avif";
import blog1 from "../assets/blog_01.avif";
import blog2 from "../assets/blog_02.avif";
import blog3 from "../assets/blog_03.avif";
import BlogCard from "../components/BlogCard";

const CATEGORIES = ["All Blogs", "Style Guide", "Fashion Tips", "Brand Stories"];

const BLOGS = [
  { img: blog1, category: "Style Guide",   title: "How to master the art of minimal street style",          desc: "Build a timeless wardrobe with high-quality fabrics, muted tones, and effortless oversized fits.", read: "8 min read", date: "Jan 29, 2026" },
  { img: blog2, category: "Fashion Tips",  title: "Elevate everyday outfits using modern minimalist styling", desc: "Simple changes to your daily outfit that make a dramatic difference in how you present yourself.",    read: "6 min read", date: "Dec 30, 2025" },
  { img: blog3, category: "Style Guide",   title: "Build a capsule wardrobe that works year round",          desc: "Invest in fewer, better pieces that mix and match effortlessly across every season.",                read: "5 min read", date: "Nov 22, 2025" },
  { img: blog1, category: "Brand Stories", title: "How Wearix started with one jacket and a vision",         desc: "The origin story of Wearix — from a small studio in Lahore to a global minimal fashion brand.",      read: "10 min read", date: "Oct 10, 2025" },
  { img: blog2, category: "Fashion Tips",  title: "The only 5 colours you need in your wardrobe",            desc: "A practical guide to building a neutral-forward palette that works for every occasion.",             read: "4 min read", date: "Sep 5, 2025"  },
  { img: blog3, category: "Brand Stories", title: "Behind the fabric — our sustainability promise",           desc: "How we source, test, and choose the materials that go into every Wearix piece.",                    read: "7 min read", date: "Aug 18, 2025" },
  { img: blog1, category: "Style Guide",   title: "Layering for winter without the bulk",                    desc: "Stay warm and sharp with these expert layering techniques for the colder months.",                 read: "6 min read", date: "Jul 30, 2025" },
  { img: blog2, category: "Fashion Tips",  title: "How to dress for your body type in 2026",                 desc: "Modern guidance on finding silhouettes that complement your natural shape.",                       read: "8 min read", date: "Jun 12, 2025" },
  { img: blog3, category: "Brand Stories", title: "Meet the makers behind our AW 2025 collection",          desc: "A look at the artisans and designers who brought Arctic Minimal to life.",                        read: "9 min read", date: "May 1, 2025"  },
];



const Blog = () => {
  const [active, setActive] = useState("All Blogs");

  const filtered = active === "All Blogs"
    ? BLOGS
    : BLOGS.filter((b) => b.category === active);

  const [featured, ...rest] = filtered;

  return (
    <div>
      <HeroSection
        images={[blogHero]}
        badge={{ label: "Blog", text: "Wearix Voice" }}
        heading={<>Stories, style tips,<br />and brand updates</>}
        subtext="Explore our journal — written for those who dress with intention."
        primaryLabel="Start Reading"
        secondaryLabel="Contact us"
        isHero={false}
      />

      <div className="flex flex-col gap-10 px-28 py-16">

        {/* Filter Bar */}
        <div className="flex items-center gap-2 bg-[#eeeeee] rounded-full p-1.5 w-full">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`cursor-pointer flex-1 py-2 rounded-full text-lg font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-black text-white shadow-sm"
                  : "text-black bg-white  hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blogs */}
        {filtered.length > 0 ? (
          <div className="flex flex-col gap-4">
            {/* Featured — first blog large */}
            {featured && <BlogCard blog={featured} large />}

            {/* Rest — smaller cards in pairs */}
            {rest.length > 0 && (
              <div className="flex flex-col gap-4">
                {Array.from({ length: Math.ceil(rest.length / 2) }).map((_, rowIndex) => {
                  const pair = rest.slice(rowIndex * 2, rowIndex * 2 + 2);
                  return (
                    <div key={rowIndex} className="flex gap-4">
                      {pair.map((blog, i) => (
                        <div key={i} className="flex-1">
                          <BlogCard blog={blog} />
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 gap-3">
            <p className="font-display text-2xl font-medium text-black">No posts found</p>
            <p className="text-sm text-black/40">Try selecting a different category</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Blog;