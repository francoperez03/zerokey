import React from "react";
import Cart from "../cart/Cart";
import { IoIosArrowForward } from "react-icons/io";

function SelectedCard() {
  return (
    <section className="flex border m-auto h-screen w-full items-center justify-center">
      <div>
        <div className="p-4 w-96 rounded  border flex items-center justify-between hover:cursor-pointer hover:text-red-500">
            <h3>Tarjeta Mastercard terminada en 1075</h3>
            <IoIosArrowForward />
        </div>
        <div className="p-4 w-96 rounded  border flex items-center justify-between hover:cursor-pointer hover:text-red-500">
            <h3>Tarjeta Visa terminada en 1005</h3>
            <IoIosArrowForward />
        </div>
        <div className="p-4 w-96 rounded  border flex items-center justify-between hover:cursor-pointer hover:text-red-500">
            <h3>Zerokey Visa HSBC Amazon</h3>
            <IoIosArrowForward />
        </div>
        <div className="p-4 w-96 rounded  border flex items-center justify-between hover:cursor-pointer hover:text-red-500">
            <h3>Zerokey Visa HSBC Uber</h3>
            <IoIosArrowForward />
        </div>
      </div>
      <Cart />
    </section>
  );
}

export default SelectedCard;
