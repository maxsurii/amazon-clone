import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://rukminim1.flixcart.com/image/416/416/kc54ivk0/television/r/q/g/mi-l43m4-4ain-original-imaftc5fy6bfmhyb.jpeg"
        alt=""
      />
      {basket?.lengh === 0 ? (
        <div>
          <h2>Your Shopping Cart is empty.</h2>
          <p>
            You have items saved to buy later. To buy one--or more--now, click
            "Move to Cart" next to the item.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {/** List all checkout products */}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
