import React from "react";

export default function Confirmation() {
  const confirm = require("../assets/confirm.png");
  return (
    <section>
      <div
        className='max-w-3xl flex justify-center flex-wrap h-screen mx-auto align-center'
        id='container'
      >
        <div className='flex flex-col w-full items-center justify-center'>
          <img className='w-[150px]' src={confirm} alt='confirmation tick' />
          <h1 className='text-6xl text-center mt-6 mb-3'>
            Your booking is complete
          </h1>
        </div>
      </div>
    </section>
  );
}
