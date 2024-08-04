import { Button } from "../ui/button";

function Navbar() {
  return (
    <nav className="flex w-full  bg-[#001E35] py-2 px-8   justify-between items-center">
      <ol className="flex gap-8 text-white items-center">
        <li className="hover:cursor-pointer">
          <a href="/">
          <img src="/assets/ZEROKEY-W.png" alt="" className="w-[100px] -mb-2" />
          </a>
        </li>
        <li className="hover:cursor-pointer hover:text-red-500">
          <a href="#problem">Cost of fraud</a>
        </li>
        <li className="hover:cursor-pointer hover:text-red-500">
          <a href="#partners">Partner</a>
        </li>
        <li className="hover:cursor-pointer hover:text-red-500">
          <a href="#ourmission">Our Mission</a>
        </li>
        <li className="hover:cursor-pointer hover:text-red-500">
          <a href="">Process</a>
        </li>
        <li className="hover:cursor-pointer hover:text-red-500">
          <a href="">Demo</a>
        </li>
        <li className="hover:cursor-pointer hover:text-red-500">
          <a href="">Conect whith Us</a>
        </li>
        <li className="hover:cursor-pointer hover:text-red-500">
          <a href="#about">About us</a>
        </li>
      </ol>
      <li>
        <Button variant="outline" className="text-white rounded hover:text-red-500">Contact</Button>
      </li>
    </nav>
  );
}

export default Navbar;