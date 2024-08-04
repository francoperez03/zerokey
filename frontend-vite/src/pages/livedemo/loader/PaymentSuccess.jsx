import { Button } from "@/components/ui/button";
import React from "react";
import { FaCheck } from "react-icons/fa";
import useStore from "../store/state";

function PaymentSuccess() {
  const { status, setStatus, statuses, isBoolean, toggleBoolean, setBoolean } =
    useStore();

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100000000)
      .toString()
      .padStart(8, "0");
  };

  const generateAlphaNumericCode = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  };
  return (
    <div>
      <div className="flex flex-col gap-4 h-[450px] w-96 p-4 justify-center items-center bg-slate-50 rounde shadow-md shadow-gray-500">
        <FaCheck className="text-[100px] text-green-800 mb-12" />
        <p className="text-2xl font-medium">Ticket Payment Successful</p>
        <p>
          Amount Pay <span className="font-bold text-lg">$45.00</span>
        </p>
        <span className="w-full border-t border-gray-400"></span>
        <p className="text-lg font-medium  ">
          Transaction Number <span>{generateRandomNumber()}</span>
        </p>
        {isBoolean === true && (
          <p className="text-sm text-center">
            Txn Hash: 
            <a href="https://sepolia.scrollscan.com/tx/0x1ac8b081c8ed888415dc9e7d4d0da50eed77ecead07ac5e30e91a6f367f37acb" target="_blank">
            <span className="text-sm font-medium text-blue-700"> 0x1ac...37acb</span>
            </a>
           
          </p>
        )}
        {isBoolean === true && (
          <p className="text-[10px] text-center">
            Your card data was protected with{" "}
            <span className="font-bold text-blue-600">
              ZK Knowledge Proof
            </span>{" "}
            technology{" "}
          </p>
        )}
        <a href="/#demo">
          <Button className="rounded w-28 hover:text-red-500" variant="outline">
            Back
          </Button>
        </a>
      </div>
    </div>
  );
}

export default PaymentSuccess;
