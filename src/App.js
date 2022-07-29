import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

import { sendCartData, receiveCartData } from "./components/store/cart-actions";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

let isTrue = true

function App() {
  const dispatch = useDispatch();

  const isVisible = useSelector((state) => state.ui.isVisible);
  const cart = useSelector((state) => state.cart);
  const isNotification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(receiveCartData())
  },[dispatch]) //react guarentees that this function never changes so It's just here for the sake of completeness

  useEffect(() => {

    if(isTrue){
      isTrue = false;
      return;
    }

    if(cart.changed) dispatch(sendCartData(cart))

  }, [cart, dispatch]);

  return (
    <>
      {isNotification && (
        <Notification
          status={isNotification.status}
          title={isNotification.title}
          message={isNotification.message}
        />
      )}
      <Layout>
        {isVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
