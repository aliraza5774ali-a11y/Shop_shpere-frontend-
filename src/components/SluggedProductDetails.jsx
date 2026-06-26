import { useParams } from "react-router-dom";
import ProductDetails from "../pages/ProductDetails";

const SluggedProductDetails = () => {
  const { slug } = useParams();
  return <ProductDetails key={slug} />;
};

export default SluggedProductDetails