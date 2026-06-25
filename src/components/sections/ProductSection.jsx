import { LuSparkles } from "react-icons/lu";
import img01 from "../../assets/product_01.avif";
import img02 from "../../assets/product-01.avif";
import img11 from "../../assets/product_02.avif";
import img12 from "../../assets/product-02.avif";
import img21 from "../../assets/product_03.avif";
import img22 from "../../assets/produc_03.avif";
import img31 from "../../assets/product_04.avif";
import img32 from "../../assets/product-04.avif";
import img41 from "../../assets/product_05.avif";
import img42 from "../../assets/product-05.avif";
import img51 from "../../assets/product_06.avif";
import img52 from "../../assets/product-06.avif";
import SampleProduct from "../SampleProduct";

const ProductSection = () => {
  return (
    <section className="bg-[#f8f8f8] px-8 py-8 flex flex-col gap-10 mt-5">
      <div className="flex items-end justify-between">
        {/* Left: badge + heading */}
        <div className="flex flex-col gap-4">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-black shadow-sm">
            <LuSparkles size={13} />
            New Arrivals
          </span>

          {/* Heading */}
          <h2 className="text-4xl font-semibold leading-tight tracking-wider text-black">
            Fresh fits in <br /> our latest drop
          </h2>
        </div>

        {/* Right: CTA button */}
        <button className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800">
          See all collections
        </button>
      </div>

      <div className="flex flex-col gap-10 ">
        <div className="flex items-center justify-center gap-4">
          <SampleProduct
            img1={img01}
            img2={img02}
            title="Textured Knitted Shirt"
            price="$59.00"
            discount="&79.00"
          />
          <SampleProduct
            img1={img11}
            img2={img12}
            title="Textured Knitted Shirt"
            price="$59.00"
            discount="&79.00"
          />
          <SampleProduct
            img1={img21}
            img2={img22}
            title="Textured Knitted Shirt"
            price="$59.00"
            discount="&79.00"
          />
        </div>

        <div className="flex items-center justify-center gap-4">
          <SampleProduct
            img1={img31}
            img2={img32}
            title="Textured Knitted Shirt"
            price="$59.00"
            discount="&79.00"
          />
          <SampleProduct
            img1={img41}
            img2={img42}
            title="Textured Knitted Shirt"
            price="$59.00"
            discount="&79.00"
          />
          <SampleProduct
            img1={img51}
            img2={img52}
            title="Textured Knitted Shirt"
            price="$59.00"
            discount="&79.00"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
