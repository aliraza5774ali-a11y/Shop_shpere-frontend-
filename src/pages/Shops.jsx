import { useState } from "react";
import HeroSection from "../components/sections/HeroSection";
import SampleProduct from "../components/SampleProduct";
import hero01 from "../assets/shopHero.avif";
import img01 from "../assets/product_01.avif";
import img02 from "../assets/product-01.avif";
import img11 from "../assets/product_02.avif";
import img12 from "../assets/product-02.avif";
import img21 from "../assets/product_03.avif";
import img22 from "../assets/produc_03.avif";
import img31 from "../assets/product_04.avif";
import img32 from "../assets/product-04.avif";
import img41 from "../assets/product_05.avif";
import img42 from "../assets/product-05.avif";
import img51 from "../assets/product_06.avif";
import img52 from "../assets/product-06.avif";
import { Leaf, RotateCcw, ShieldCheck, Truck } from "lucide-react";

const CATEGORIES = [
  "All Products",
  "Men's Wear",
  "Women's Wear",
  "Children's Wear",
];

const TRUST = [
  {
    icon: <Truck size={22} strokeWidth={1.5} />,
    title: "Free Shipping",
    desc: "On all orders over $150",
  },
  {
    icon: <RotateCcw size={22} strokeWidth={1.5} />,
    title: "Easy Returns",
    desc: "30-day hassle-free returns",
  },
  {
    icon: <Leaf size={22} strokeWidth={1.5} />,
    title: "Sustainably Made",
    desc: "Ethical, eco-conscious fabrics",
  },
  {
    icon: <ShieldCheck size={22} strokeWidth={1.5} />,
    title: "Secure Checkout",
    desc: "SSL encrypted payments",
  },
];
const ALL_PRODUCTS = [
  {
    img1: img01,
    img2: img02,
    title: "Textured Knitted Shirt",
    price: "$59.00",
    discount: "$79.00",
    category: "Men's Wear",
  },
  {
    img1: img11,
    img2: img12,
    title: "Relaxed Linen Overshirt",
    price: "$69.00",
    discount: "$89.00",
    category: "Women's Wear",
  },
  {
    img1: img21,
    img2: img22,
    title: "Minimal Utility Jacket",
    price: "$99.00",
    discount: "$129.00",
    category: "Men's Wear",
  },
  {
    img1: img31,
    img2: img32,
    title: "Soft Fleece Pullover",
    price: "$79.00",
    discount: "$99.00",
    category: "Women's Wear",
  },
  {
    img1: img41,
    img2: img42,
    title: "Essential Cargo Trouser",
    price: "$89.00",
    discount: "$109.00",
    category: "Men's Wear",
  },
  {
    img1: img51,
    img2: img52,
    title: "Cotton Everyday Tee",
    price: "$39.00",
    discount: "$55.00",
    category: "Children's Wear",
  },
  {
    img1: img01,
    img2: img02,
    title: "Oversized Wool Coat",
    price: "$149.00",
    discount: "$189.00",
    category: "Women's Wear",
  },
  {
    img1: img11,
    img2: img12,
    title: "Ribbed Knit Sweater",
    price: "$65.00",
    discount: "$85.00",
    category: "Men's Wear",
  },
  {
    img1: img21,
    img2: img22,
    title: "Wide Leg Trousers",
    price: "$75.00",
    discount: "$95.00",
    category: "Women's Wear",
  },
  {
    img1: img31,
    img2: img32,
    title: "Mini Striped Dress",
    price: "$85.00",
    discount: "$110.00",
    category: "Children's Wear",
  },
  {
    img1: img41,
    img2: img42,
    title: "Bomber Jacket",
    price: "$119.00",
    discount: "$149.00",
    category: "Men's Wear",
  },
  {
    img1: img51,
    img2: img52,
    title: "Satin Slip Skirt",
    price: "$55.00",
    discount: "$75.00",
    category: "Women's Wear",
  },
];

const Shops = () => {
  const [active, setActive] = useState("All Products");

  const filtered =
    active === "All Products"
      ? ALL_PRODUCTS
      : ALL_PRODUCTS.filter((p) => p.category === active);

  return (
    <div>
      <HeroSection
        images={[hero01]}
        badge={{ label: "Shop", text: "The new season" }}
        heading={
          <>
            Elevate your daily
            <br />
            wardrobe with ease
          </>
        }
        subtext="Explore our handpicked modern silhouettes crafted from the world's most sustainable fabrics."
        primaryLabel="Explore Stories"
        secondaryLabel="Contact us"
        isHero={false}
      />

      <div className="flex flex-col gap-10 px-28 py-16">
        {/* Filter Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 bg-[#eeeeee] rounded-full p-1.5 w-full">
            {CATEGORIES.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`flex-1 py-2 rounded-full text-lg font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-black text-white shadow-sm"
                      : "text-black bg-white hover:text-black"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-3 gap-6">
            {filtered.map((product, i) => (
              <SampleProduct
                key={i}
                img1={product.img1}
                img2={product.img2}
                title={product.title}
                price={product.price}
                discount={product.discount}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 gap-3">
            <p className="text-2xl font-semibold text-black">No items found</p>
            <p className="text-sm text-black/40">
              Try selecting a different category
            </p>
          </div>
        )}
      </div>

      {/* Load More */}
      <div className="flex flex-col items-center gap-4 px-28">
        <div className="flex items-center gap-4 w-full">
          <div className="flex-1 h-px bg-black/6" />
          <button className="group flex items-center gap-2 px-8 py-3 cursor-pointer rounded-full border border-black/10 bg-white text-sm font-medium text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300">
            Load More
            <span className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-white transition-colors duration-300" />
          </button>
          <div className="flex-1 h-px bg-black/6" />
        </div>
        <p className="text-xs text-black/30 font-medium">
          Showing {filtered.length} of 48 products
        </p>
      </div>

      {/* Trust Strip */}
      <div className="grid grid-cols-4 gap-4 py-10 pt-4  px-28">
        {TRUST.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center gap-2 px-6 py-4 bg-[#f3f3f3] rounded-2xl"
          >
            <div className="text-2xl">{item.icon}</div>
            <p className="text-sm font-semibold text-black">{item.title}</p>
            <p className="text-xs text-black/40 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shops;
