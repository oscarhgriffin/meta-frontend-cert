import React from "react";
import bBoard from "../assets/bBoard.jpg"
import { useNavigate } from "react-router-dom"; //Internal linking

export default function Header() {
  const navigate = useNavigate();

  return (
    <main>
      <section className='bg-[#495E57]'>
        <div
          id='container'
          className='max-w-5xl flex mx-auto items-center px-4 py-10'
        >
          <div className='flex flex-col' id='hero-text'>
            <h1 className='text-white text-7xl max-sm:text-5xl'>
              Little Lemon
            </h1>
            <h2 className='text-white text-3xl mb-3 max-sm:text-1xl'>
              Phoenix, AZ since 2012
            </h2>
            <p className='text-white'>
            Our mission is to make every moment that we’re a part of super special, one that leaves people feeling crazy-good.
            </p>
            <button
              onClick={() => navigate("/booking")}
              className='bg-[#F4CE14] rounded py-3 max-md:w-[70%] max-sm:w-full mt-3'
            >
              Book a table
            </button>
          </div>
          <div className='flex justify-end'>
            <img
              className='rounded w-[75%]'
              src={bBoard}
              alt='little lemon food'
            />
          </div>
        </div>
      </section>
    </main>
  );
}
