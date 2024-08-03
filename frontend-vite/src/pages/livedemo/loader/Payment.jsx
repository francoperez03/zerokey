import React from "react";
import { FaCheck } from "react-icons/fa";

function Payment() {
  return (
    <div className="flex flex-col gap-4 h-[450px] w-96 p-4 justify-center items-center bg-slate-50 rounde shadow-md shadow-gray-500">

      <div className="flex flex-col gap-4 p-4 justify-center items-center">
        <FaCheck className="text-7xl text-green-800" />
        <p className="text-xl text-center">Validacion generada correctamente</p>
      </div>
      <div className="flex flex-col gap-4 p-4 justify-center items-center">
        <img src="/assets/loading.gif" alt="" className="size-28" />
        <p className="text-xl">Procesando pago</p>
      </div>
    </div>
  );
}

export default Payment;
