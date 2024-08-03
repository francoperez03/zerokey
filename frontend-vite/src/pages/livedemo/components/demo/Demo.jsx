import React from "react";
import Checkout from "../checkout/Checkout";

function Demo() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h5 className="text-lg pb-2">Enter fictitious card information</h5>
      <Checkout />
    </div>
  );
}

export default Demo;
