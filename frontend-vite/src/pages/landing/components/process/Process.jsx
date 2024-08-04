import React from "react";

function Process() {
  return (
    <section id="process" className="w-full bg-white py-8">
      <h3 className="text-4xl text-center py-4 font-semibold">
        With ZeroKey don't share your card anymore
      </h3>
      <p className="text-lg text-center w-[90%] mx-auto">
        At ZeroKey, we transform your CVV into a unique test that only you can
        use. It is no longer necessary to write or send your bank details. By
        complying with the parameters you define, we protect your information
        from phishing and data breaches.
      </p>
      <img src="/assets/process.png" alt="" />
    </section>
  );
}

export default Process;
