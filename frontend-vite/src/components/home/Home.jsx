import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import Navbar from "../navbar/Navbar";

function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
      <Navbar />
      <div className="flex justify-between items-center w-full   px-8">
        <div className="flex flex-col w-1/2">
          <img src="/assets/ZEROKEY-B.png" alt="" className="w-[150px]" />
          <h1 className="text-6xl   font-medium mb-4">Discover the new layer of security for online payments.</h1>
          <p className="text-2xl">Guarantee the security of your payments with zkProof technology: Security without compromises.</p>
        </div>
        <img
          src="/assets/creditCard.jpg"
          alt=""
          className="w-[450px] rounded-2xl"
        />
      </div>
      <MdOutlineKeyboardDoubleArrowDown className="text-5xl mb-2 hover:cursor-pointer hover:scale-110 transform transition" />
    </main>
  );
}

export default Home;