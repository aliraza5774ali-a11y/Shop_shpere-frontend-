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
import SectionHeader from "../SectionHeader";

const ProductSection = () => {
  return (
    <section className="bg-[#f8f8f8] px-28 pt-10 py-18 flex flex-col gap-10 ">
      <SectionHeader
        badge="New Arrivals"
        icon={<LuSparkles size={13} />}
        heading={
          <>
            Fresh fits in <br /> our latest drop
          </>
        }
        ctaLabel="See all collections"
        ctaLink="/collection"
      />

      <div className="grid grid-cols-3 gap-6">
        <SampleProduct
          img1={img01}
          img2={img02}
          title="Textured Knitted Shirt"
          price="$59.00"
          discount="$79.00"
        />
        <SampleProduct
          img1={img11}
          img2={img12}
          title="Relaxed Linen Overshirt"
          price="$69.00"
          discount="$89.00"
        />
        <SampleProduct
          img1={img21}
          img2={img22}
          title="Minimal Utility Jacket"
          price="$99.00"
          discount="$129.00"
        />
        <SampleProduct
          img1={img31}
          img2={img32}
          title="Soft Fleece Pullover"
          price="$79.00"
          discount="$99.00"
        />
        <SampleProduct
          img1={img41}
          img2={img42}
          title="Essential Cargo Trouser"
          price="$89.00"
          discount="$109.00"
        />
        <SampleProduct
          img1={img51}
          img2={img52}
          title="Cotton Everyday Tee"
          price="$39.00"
          discount="$55.00"
        />
      </div>
    </section>
  );
};

export default ProductSection;
