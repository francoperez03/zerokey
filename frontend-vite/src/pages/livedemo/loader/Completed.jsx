import React from "react";
import { FaCheck } from "react-icons/fa";

function Completed() {
  return (
    <div>
      <div className="flex flex-col gap-4 p-4 justify-center items-center">
        <FaCheck className="text-7xl text-green-800" />
        <p className="text-xl">Pago generado </p>
      </div>
    </div>
  );
}

export default Completed;
