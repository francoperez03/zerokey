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
      <div className="flex flex-col gap-4 h-[450px] w-96 p-4 justify-center items-center bg-slate-50 rounde shadow-md shadow-gray-500">
        <FaCheck className="text-[100px] text-green-800 mb-12" />
        <p className="text-2xl font-medium text-center">
          Successfully generated test
        </p>
        <span className="w-full border-t border-gray-400"></span>
        <p className="text-md font-medium">
          Generated Test <span className=" font-medium">
            {generateAlphaNumericCode()}...{generateAlphaNumericCode()}
          </span>
        </p>
        <p className="text-[10px] text-center">
          Your CVV Code was protected with{" "}
          <span className="font-bold text-blue-600">ZK Knowledge Proof</span>{" "}
          technology
        </p>
        <div className="flex gap-4">
          <Button className="rounded w-28 hover:bg-red-500" variant="outline">
            Back
          </Button>
          <Button
            className="rounded w-28 hover:bg-red-500   "
            variant="outline"
          >
            See Tests
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Completed;
