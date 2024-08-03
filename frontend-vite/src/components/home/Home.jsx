import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import Navbar from "../navbar/Navbar";

function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <div className="flex justify-between items-center w-full px-8">
        <div className="flex flex-col ">
          <img src="/assets/ZEROKEY.png" alt="" className="w-[150px]" />
          <h1 className="text-7xl font-medium mb-4">Solucinamos tu problema</h1>
          <p className="text-2xl">con el mejor equipo de programadores</p>
        </div>
        <img
          src="/assets/creditCard.jpg"
          alt=""
          className="w-[450px] rounded-2xl"
        />
      </div>
      <MdOutlineKeyboardDoubleArrowDown className="text-5xl" />
    </main>
  );
}

export default Home;