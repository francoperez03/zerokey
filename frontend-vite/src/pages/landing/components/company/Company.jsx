import React from "react";

function Company() {
  return (
    <section
      className="bg-gray-800 w-full flex flex-col  py-12"
      id="ourmission"
    >
      <h3 className="text-center text-5xl font-medium text-white  ">
        Our Mission
      </h3>
      <div className="w-[90%] mx-auto p-4 flex items-center justify-around">
        <img
          src="/assets/ESCUDO.png"
          alt=""
          className=" rounded-[10px] h-[350px]"
        />

        <p className="bg-white w-3/5 p-8 text-xl rounded-[10px] shadow-md shadow-gray-400">
          We combat phishing by generating domain- and user-specific proofs that
          can only be used exclusively on pre-loaded sites. We revolutionize
          payment security by turning sensitive credit card data into
          unassailable zero-knowledge proofs. The financial industry, especially
          banks, will save millions of dollars annually by reducing fraudulent
          transactions.
        </p>
      </div>
    </section>
  );
}

export default Company;
