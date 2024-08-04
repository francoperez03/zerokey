import React from "react";

function About() {
  return (
    <section
      className="w-full flex flex-col gap-12 py-12 bg-gray-800"
      id="about"
    >
      <h3 className="text-5xl text-center font-medium text-white">About us</h3>
      <div className="w-[90%] mx-auto p-8 rounded-[10px] bg-white text-xl flex items-center justify-between shadow-md shadow-gray-400">
        <p className="w-1/2 px-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eligendi doloremque vitae vero ex quos? Quibusdam rerum voluptatem, excepturi soluta veniam tempora inventore autem. Ipsa neque porro deserunt nisi optio.L
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, aliquam distinctio voluptatem quam nisi perferendis ad, repellendus dolorem atque fugiat assumenda molestias, ea architecto. Dolores vero dignissimos voluptatum minus non. </p>
        <img src="/assets/grupo.jpg" alt="" className=" w-1/2 rounded-[10px]"/>
      </div>
    </section>
  );
}

export default About;
