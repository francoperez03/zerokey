import React from "react";

function Cart() {
  return (
    <div className="size-72 flex flex-col py-12 items-center justify-between border rounded">
      <h3 className="text-xl font-bold">Resumen de compra</h3>
      <span className="w-full border border-gray-400"></span>
      <div className="w-full px-8">
        <div className="flex justify-between items-center">
          <p>Coffe</p>
          <p>$5.00</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Frites</p>
          <p>$25.00</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Licence Key</p>
          <p>$15.00</p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold">Total: $40.00</h3>
      </div>
    </div>
  );
}

export default Cart;
