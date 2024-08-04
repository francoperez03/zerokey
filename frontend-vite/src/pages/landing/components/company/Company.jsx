import React from "react";

function Company() {
  return (
    <section className="bg-gray-800 w-full flex flex-col gap-12 py-12" id="ourmission">
      <h3 className="text-center text-5xl font-medium text-white py-6">
        Our Mission
      </h3>
      <div className="w-[90%] mx-auto p-4 flex items-center justify-around">
        <img
          src="/assets/creditCard.jpg"
          alt=""
          className=" rounded-[10px] h-[150px]"
        />

        <p className="bg-white w-1/3 p-8 text-xl rounded-[10px] shadow-md shadow-gray-400">
          ZeroKey combate el phishing al generar pruebas específicas del dominio
          y del usuario que solo se pueden usar exclusivamente en sitios
          precargados.{" "}
        </p>
      </div>
      <div className="w-[90%] mx-auto p-4 flex items-center justify-around">
        <p className="bg-white w-1/3 p-8 text-xl rounded-[10px] shadow-md shadow-gray-400">
          ZeroKey revoluciona la seguridad de los pagos al convertir los datos
          confidenciales de las tarjetas de crédito en pruebas de conocimiento
          cero inexpugnables.{" "}
        </p>
        <img
          src="/assets/creditCard.jpg"
          alt=""
          className=" rounded-[10px] h-[150px]"
        />
      </div>
      <div className="w-[90%] mx-auto p-4 flex items-center justify-around">
        <img
          src="/assets/creditCard.jpg"
          alt=""
          className=" rounded-[10px] h-[150px]"
        />

        <p className="bg-white w-1/3 p-8 rounded-[10px]  text-xl shadow-md shadow-gray-400">
          La industria financiera , especialmente los bancos, ahorrarán millones
          de dólares al año gracias a la reducción de las transacciones
          fraudulentas
        </p>
      </div>
    </section>
  );
}

export default Company;
