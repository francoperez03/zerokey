import React from "react";

function About() {
  return (
    <section
      className="w-full flex flex-col gap-12 py-12 bg-gray-800"
      id="about"
    >
      <h3 className="text-5xl text-center font-medium text-white">About us</h3>
      <div className="w-[90%] mx-auto p-8 rounded-[10px] bg-white text-xl flex items-center justify-between shadow-md shadow-gray-400">
        <p className="w-1/2 px-12">At ZeroKey, we are a group of young technology enthusiasts from diverse disciplines, united by our passion for innovation. We participated in a hackathon where we developed a revolutionary solution for credit card security. Using Zero-Knowledge Proofs technology, we transform sensitive information into unique proofs that protect against phishing and data theft, ensuring that only you have secure access to your financial transactions.</p>
        <img src="/assets/grupo.jpg" alt="" className=" w-1/2 rounded-[10px]"/>
      </div>
    </section>
  );
}

export default About;
