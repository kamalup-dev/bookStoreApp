import { uiSliceActions } from "./ui-slice";
import { cartSliceActions } from "./cart-slice";

export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(
        uiSliceActions.showNotification({
          status: "pending",
          title: "Sending",
          message: "Sending Cart Data",
        })
      );
      const sendRequest = async () => {
          const response = await fetch(
              "https://storeapp-3eb70-default-rtdb.firebaseio.com/cart.json",
              {
                method: "PUT",
                body: JSON.stringify({items: cart.items, totalQuantity: cart.totalQuantity}),
              }
            );
            if (!response.ok) {
              throw new Error("Sending data failed!");
            }
      }
      try {
          await sendRequest();
          dispatch(
              uiSliceActions.showNotification({
                status: "success",
                title: "Success",
                message: "Sent Cart Data Successfully",
              })
            );
      }
      catch (error) {
          dispatch({
              status: "error",
              title: "error",
              message: "Sending Cart Data Failed!",
            })
      }
    };
  };

export const receiveCartData = () => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const response = await fetch(
                "https://storeapp-3eb70-default-rtdb.firebaseio.com/cart.json"
              );
              if (!response.ok) {
                throw new Error("Fetching data failed!");
              }
            const data = response.json()
            return data;
        }
        try {
            const data = await sendRequest()
            dispatch(cartSliceActions.replaceCart({
                items: data.items || [],
                totalQuantity: data.totalQuantity
            }))
        } catch (error) {
            dispatch({
                status: "error",
                title: "error",
                message: "Fetching Cart Data Failed!",
              })
        }
    }
  }