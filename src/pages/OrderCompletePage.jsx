import { useQuery } from "react-query";
import { Suspense } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/atoms/Loader";
import OrderCompleteTemplate from "../components/templates/OrderCompleteTemplate";
import { getOrderFromId } from "../api/order";

/** 주문 완료 페이지
 *
 * @returns {JSX.Element}
 */
const OrderCompletePage = () => {
  const { id } = useParams();
  const { data } = useQuery([`orders/${id}`], () => getOrderFromId(id));

  return (
    <Suspense fallback={<Loader />}>
      <OrderCompleteTemplate data={data} />
    </Suspense>
  );
};

export default OrderCompletePage;
