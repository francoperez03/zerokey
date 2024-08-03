import React from "react";
import { Button } from "../ui/button";

function Navbar() {
  return (
    <nav className="flex w-full  bg-[#001E35] py-1 px-8   justify-between items-center">
      <ul className="flex gap-8 text-white items-center">
        <li>
          <img src="/assets/Q.png" alt="" className="w-[100px]" />
        </li>
        <li>
          <a href=""></a>ADN
        </li>
        <li>
          <a href=""></a>Example
        </li>
        <li>
          <a href=""></a>About
        </li>
      </ul>
      <li>
        <Button variant="outline">Contact</Button>Contact
      </li>
    </nav>
  );
}

export default Navbar;
