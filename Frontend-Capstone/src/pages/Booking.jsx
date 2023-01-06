import React from "react";
import { useNavigate } from "react-router-dom";

export default function Booking() {
  const navigate = useNavigate();
  function onSubmit(e) {
    e.preventDefault();
    navigate("/confirmation");
  }
  return (
    <>
      <section>
        <div
          className='bg-[#495E57] max-w-3xl flex justify-center flex-wrap h-screen mx-auto align-center'
          id='container'
        >
          <div className='flex flex-col w-full items-center justify-center'>
            <h1 className='text-white text-6xl text-center mt-6 mb-3'>
              Book a table!
            </h1>
            <p className='text-white text-sm sm:text-lg mb-6 text-center max-sm:px-5'>
              Complete the form below and we'll get a table reserved for you and your party.
            </p>
            <form
              onSubmit={onSubmit}
              className='flex flex-col justify-center w-full px-20 max-md:px-5 max-sm:px-5'
            >
              <label className='text-white mt-3' for='date'>
                Choose a Date
              </label>
              <input
                type='date'
                id='date'
                className='mb-4 mt-4 w-full px-4 py-2 text-xl text-gray-700 border bg-white border-gray-300 rounded transition ease-in-out'
                required
              />
              <label className='text-white mt-3' for='time'>
                Choose a Time
              </label>
              <select
                id='time'
                className='mb-4 mt-4 w-full px-4 py-2 text-xl text-gray-700 border bg-white border-gray-300 rounded transition ease-in-out'
              >
                <option>5:00PM</option>
                <option>6:00PM</option>
                <option>7:00PM</option>
                <option>8:00PM</option>
                <option>9:00PM</option>
                <option>10:00PM</option>
              </select>
              <label className='text-white mt-3' for='guests'>
                Number of guests
              </label>
              <input
                type='number'
                id='guests'
                placeholder='no. of guests'
                className='mb-4 mt-4 w-full px-4 py-2 text-xl text-gray-700 border bg-white border-gray-300 rounded transition ease-in-out'
                required
              />
              <button
                className='my-8 w-full bg-[#f4ce14] text-black px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-[#f4ce14]-700 transition duration-200 ease-in-out hover:shadow-lg active:bg-[#f4ce14]-800'
                type='submit'
                value='Make Your reservation'
              >
                Book Now!
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
