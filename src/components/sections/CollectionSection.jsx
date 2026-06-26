import img11 from '../../assets/collection_01.avif'
import img12 from '../../assets/collection_02.avif'
import img13 from '../../assets/collection_03.avif'
import img14 from '../../assets/collection_04.avif'
import img15 from '../../assets/collection_05.avif'
import img21 from '../../assets/collection_11.avif'
import img31 from '../../assets/collection_21.avif'
import CollectionCard from "../CollectionCard";
import { BsCollection } from "react-icons/bs";

const IMAGES1 = [img11, img12, img13, img14, img15];
const IMAGES2 = [img21]
const IMAGES3 = [img31]

const CollectionSection = () => {

  return (
    <section className="bg-[#f8f8f8] px-28 pt-10 pb-18 flex flex-col gap-10">
      
      {/* Header */}
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-4">
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-black/10 bg-white text-xs font-medium text-black shadow-sm overflow-hidden">
            <p className="bg-black rounded-full p-2 text-white"><BsCollection size={13} /></p>
            <span className="pr-3">Our Collections</span>
          </span>
          <h2 className="text-4xl font-semibold leading-tight tracking-wide text-black">
            modern collections <br /> defined by simplicity
          </h2>
        </div>
        <button className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800">
          shop all items
        </button>
      </div>

      <CollectionCard images={IMAGES1} wearType="Men's Wear" wearBadge='New' title1='Premium modern' title2='collection for men' priceFrom='$45.00' priceTo='$79.00' /> 
      <CollectionCard images={IMAGES2} wearType="Wonen's Wear" wearBadge='New' title1='Modern daily' title2='wear for women' priceFrom='$35.00' priceTo='$150.00' reverse='true'/> 
      <CollectionCard images={IMAGES3} wearType="children's Wear" wearBadge='2026' title1='Modern easy' title2='stylish for children' priceFrom='$25.00' priceTo='$90.00' /> 

    </section>
  );
};

export default CollectionSection;