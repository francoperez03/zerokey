import { Button } from "@/components/ui/button";
import React from "react";

function ButtonDemo() {
  return (
    <section
      className="flex flex-col justify-center bg-gray-800 w-full m-auto py-12"
      id="demo"
    >
      <h3 className="text-5xl text-center   pb-12 font-medium text-white">
        Live Demo
      </h3>
      <div className="flex gap-12 m-auto">
        <a href="/generate" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="text-white hover:text-red-600">
            Live Demo Generar Prueba
          </Button>
        </a>
        <a href="/checkout" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="text-white hover:text-red-600">
            Live Demo Checkout
          </Button>
        </a>
      </div>
    </section>
  );
}

export default ButtonDemo;
