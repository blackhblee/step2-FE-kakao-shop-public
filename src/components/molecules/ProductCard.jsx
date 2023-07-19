import Card from "../atoms/Card";
import Photo from "../atoms/Photo";
import comma from "../../utils/convert";
import SkeletonCard from "../atoms/SkeletonCard";

/** 상품 카드
 *
 * @param {object} product - 상품 정보
 * @param {boolean} loading - 로딩 상태
 * @return {JSX.Element}
 */
const ProductCard = ({ product, loading }) => {
  if (loading) {
    return (
      <div className="pb-[50px]">
        <SkeletonCard />
      </div>
    );
  }

  return (
    <Card to={`/product/${product.id}`} className="product-card pb-[50px]">
      <Photo
        src={
          process.env.REACT_APP_API_URL +
          product.image.substring(1, product.image.length)
        }
        alt={product.productName}
        className="product-image rounded-[8px]"
      />
      <div className="product-name pt-[9px] text-[14px] leading-[17px] tracking-tight">
        {product.productName}
      </div>
      <div className="flex mt-[7px] font-bold text-[18px]">
        <div className="text-blue-500 pr-[5px]">톡딜가</div>
        <div className="product-price text-gray-950">
          {comma(product.price)}원
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
