import React from "react";

function PCI() {
  return (
    <section className="flex flex-col justify-center py-6" id="partners">
      <h3 className="text-5xl text-center py-4 font-medium">Certified by</h3>
      <a href="https://www.pcisecuritystandards.org/" target="_blank">
        <img src="/assets/pci.svg" alt="" className="h-72 py-12" />{" "}
      </a>
    </section>
  );
}

export default PCI;
