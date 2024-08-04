import React, { useState } from "react";
import Cart from "../cart/Cart";
import { IoIosArrowForward } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useStore from "@/pages/livedemo/store/state";

const cardStates = {
  CVV: "cvv",
  PENDING: "pendiente",
  VERIFYING: "verificando",
  PAYING: "pagando",
};



function SelectedCard({ startInterval, setAuthorized, setRejected }) {
  const { status, setStatus, statuses } = useStore();
  const [selectedCard, setSelectedCard] = useState(null);

  console.log(status);

  const handleCardSelection = (cardState) => {
    setSelectedCard(cardState);
    if (cardState === cardStates.CVV) {
      setStatus(statuses.CVV);
    } else if (cardState === cardStates.ZQ) {
      setStatus(statuses.ZQ);
    }
  };
  const handleButtonClick = () => {
    if (selectedCard === cardStates.PENDING) {
      setStatus(statuses.VERIFYING);
    } else if (selectedCard === cardStates.CVV) {
      setStatus(statuses.PAYING);
    }
  };

  return (
    <section className="flex  m-auto   w-full items-start justify-center  gap-12 ">
      <div>
        <div
          className="p-4 w-96 rounded  border flex items-center justify-between hover:cursor-pointer hover:text-red-500"
          onClick={() => {handleCardSelection(cardStates.CVV); setAuthorized()}}
        >
          <h3>Tarjeta Mastercard terminada en 9954</h3>
          <IoIosArrowForward />
        </div>
        <div
          className="p-4 w-96 rounded  border flex items-center justify-between hover:cursor-pointer hover:text-red-500"
          onClick={() =>  {handleCardSelection(cardStates.CVV); setAuthorized()}}
        >
          <h3>Tarjeta Visa terminada en 1005</h3>
          <IoIosArrowForward />
        </div>
        <div
          className="p-4 w-96 rounded  border flex items-center justify-between hover:cursor-pointer hover:text-red-500"
          onClick={() => {handleCardSelection(cardStates.ZQ); setAuthorized()}}
        >
          <h3>Zerokey Visa HSBC Amazon</h3>
          <IoIosArrowForward />
        </div>
        <div
          className="p-4 w-96 rounded  border flex items-center justify-between hover:cursor-pointer hover:text-red-500"
          onClick={() =>  {handleCardSelection(cardStates.ZQ); setRejected()}}
        >
          <h3>Zerokey Visa HSBC Uber</h3>
          <IoIosArrowForward />
        </div>
        <div
          className="p-4 w-96 rounded  border flex items-center justify-between hover:cursor-pointer hover:text-red-500"
          onClick={() => {handleCardSelection(cardStates.ZQ); setRejected()}}
        >
          <h3>Zerokey Visa HSBC Adidas</h3>
          <IoIosArrowForward />
        </div>
        <div
          className="p-4 w-96 rounded  border flex items-center justify-between hover:cursor-pointer hover:text-red-500"
          onClick={() =>  {handleCardSelection(cardStates.ZQ); setRejected()}}
        >
          <h3>Zerokey Visa HSBC Levis</h3>
          <IoIosArrowForward />
        </div>
      </div>
      <div className="  flex flex-col gap-4">
        <Cart />
        {status === statuses.ZQ && (
          <Button
            variant="outline"
            className="w-full text-black rounded hover:text-red-500 "
            onClick={()=>startInterval()}
          >
            Pagar
          </Button>
        )}
        {status === statuses.CVV && (
          <div className="flex gap-4">
            <Input type="text" placeholder="CVC" className="rounded" />
            <Button
              variant="outline"
              className="w-full text-black rounded hover:text-red-500 "
              onClick={()=>startInterval()}
            >
              Pagar
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

export default SelectedCard;
