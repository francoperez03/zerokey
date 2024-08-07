import { Button } from "@/components/ui/button";
import React from "react";
import { FaCheck } from "react-icons/fa";

function Completed() {
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
      <div className="flex flex-col gap-4 h-[450px] w-96 p-4 justify-between py-12 items-center bg-slate-50 rounde shadow-md shadow-gray-500">
        <FaCheck className="text-[100px] text-green-800 mb-12" />
        <p className="text-2xl font-medium text-center">
          Proof Generated Successfully
        </p>
        <span className="w-full border-t border-gray-400"></span>
        
        <p className="text-[10px] text-center">
        Your card data was protected with{" "}
          <span className="font-bold text-blue-600">ZK Knowledge Proof</span>{" "}
          technology
        </p>
        <div className="flex gap-4">
        <a href="/#demo" target="_blank" rel="noopener noreferrer">
        <Button className="rounded w-28 hover:text-red-500" variant="outline">
            Back
          </Button>
        </a>
        </div>
      </div>
    </div>
  );
}

export default Completed;
