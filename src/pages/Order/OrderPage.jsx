import { useLocation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { OrderSuccess } from "./components/OrderSuccess";
import { OrderFailed } from "./components/OrderFailed";

export const OrderPage = () => {
  const { state } = useLocation();
  useTitle("Order Summary");
  return (
    <main>
      {state.status ? <OrderSuccess data={state.data} /> : <OrderFailed />}
    </main>
  );
};
