import React from "react";

export default function About() {
  return (
    <section id='about' className='mb-20'>
      <div
        id='container'
        className='max-w-5xl flex mx-auto space-x-10 justify-items-center px-4 py-6 max-sm:py-12'
      >
        <div className='flex flex-col' id='hero-text'>
          <h2 className='text-3xl text-center mb-3 max-sm:text-1xl'>About Little Lemon</h2>
          <p className='text-center w-full mb-4'>
          Little Lemon is fueled by a collection of individuals passionate 
          about creating a space for people to connect. 
          Our restaurants are an ode to our communities – 
          providing familiar yet inspired surroundings, wine
          appropriate for both the most casual and sacred of gatherings, 
          and a menu that satisfies all your cravings
          </p>
        </div>
      </div>
    </section>
  );
}
