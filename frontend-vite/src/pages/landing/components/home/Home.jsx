import Navbar from "@/components/navbar/Navbar";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

function Home() {
  return (
    <div className="relative w-full h-screen">
      {/* Imagen de fondo con tamaño específico y opacidad */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/assets/ZEROKEY-B.png')",
          backgroundSize: '500px ', // Ajusta el tamaño aquí (ancho x alto)
          opacity: 0.1,
        }}
      ></div>

      <main className="relative flex min-h-screen w-full flex-col items-center justify-between">
        <Navbar />
        <div className="flex justify-between items-center w-full gap-4 px-8 h-64">
          <div className="flex flex-col w-1/2">
            <h1 className="text-6xl font-medium mb-4">
              Discover the new layer of security for online payments.
            </h1>
            <p className="text-xl">
              We use Zero-Knowledge Proofs to offer banks and payment processors
              a solution that eliminates the risk of CVV stored in online
              payments, significantly reducing fraud losses.
            </p>
          </div>
          <img
            src="/assets/creditCard.jpg"
            alt="Credit Card"
            className="w-[500px] rounded-2xl"
          />
        </div>
        <MdOutlineKeyboardDoubleArrowDown className="text-5xl mb-2 hover:cursor-pointer hover:scale-110 transform transition" />
      </main>
    </div>
  );
}

export default Home;
