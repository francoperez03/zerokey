import Navbar from "@/components/navbar/Navbar";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

function Home() {
  return (
    <div className="relative w-full h-screen">
      <main className="relative flex min-h-screen w-full flex-col items-center justify-between">
        <Navbar />
        <div className="flex justify-around items-center w-full gap-2 px-8 h-64">
          <div className="flex flex-col w-1/2">
            <h1 className="text-6xl font-semibold mb-8">
              An Anti-Phishing and Anti-Leaking Payment Solution
            </h1>
            <p className="text-xl">
              Convert credit card sensitive data into unbreachable
              Zero-Knowledge proofs, safeguarding against phishing and
              organizations leaking.
            </p>
          </div>
          <img
            src="/assets/creditCard.jpg"
            alt="Credit Card"
            className="w-[450px] rounded-2xl"
          />
        </div>
        <a href="#problem">
          <MdOutlineKeyboardDoubleArrowDown className="text-5xl mb-12 hover:cursor-pointer hover:scale-110 transform transition" />
        </a>
      </main>
    </div>
  );
}

export default Home;
