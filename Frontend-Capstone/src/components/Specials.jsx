import React from "react";
import { useNavigate } from "react-router-dom";
import greekSalad from "../assets/greekSalad.jpg";
import straw2 from "../assets/straw2.jpg";
import salmonBrusch from "../assets/salmonBrusch.jpg";

export default function Specialis() {
  const navigate = useNavigate();
  return (
    <section id='specials'>
      <div
        id='container'
        className='max-w-5xl flex mx-auto space-x-10 items-center px-4 py-6 max-sm:py-12'
      >
        <div id='specials' className='flex justify-between w-full items-center'>
          <h2 className='text-5xl max-sm:text-3xl max-md:text-4xl flex items-center'>
            Our specials!
          </h2>
          <button
            onClick={() => navigate("/")}
            className='bg-[#ffffff] rounded py-3 w-[20%] max-sm:w-[40%] max-md:w-[30%]'
          >
            New menu every month!
          </button>
        </div>
      </div>

      <div
        id='container'
        className='max-w-5xl flex mx-auto space-x-10 items-center px-4 py-6 max-sm:py-12'
      >
        <div className='wrapper flex space-x-6'>
          {/*CARD*/}
          <div className='card bg-[#edefee] rounded'>
            <div className='card-image cover w-full'>
              <img
                src={greekSalad}
                alt='food'
                className='w-full cover rounded-t	h-[250px]'
              />
            </div>
            <div className='card-details px-6 py-6'>
              <div className='card-main flex items-center justify-between mb-2'>
                <h3 className='text-3xl'>Greek Salad</h3>
                <p className='text-[#ee9972]'>$9.99</p>
              </div>
              <p className='mb-6'>
                Our Greek salad is a refreshing and flavorful blend of crisp lettuce, 
                juicy tomato, red onion, briny olives, and creamy feta cheese. 
                It's dressed with a simple olive oil and vinegar dressing and finished 
                with a sprinkle of oregano.
              </p>
              <div className='w-full flex justify-start items-center'>
                <p className='font-semibold mr-1 text-[#333]'>
                  Takeout available!
                </p>
              </div>
            </div>
          </div>
          {/*CARD*/}
          <div className='card bg-[#edefee] rounded'>
            <div className='card-image cover w-full'>
              <img
                src={straw2}
                alt='food'
                className='w-full cover rounded-t-sm	h-[250px]'
              />
            </div>
            <div className='card-details px-6 py-6'>
              <div className='card-main flex items-center justify-between mb-2'>
                <h3 className='text-3xl'>Strawberry Salad</h3>
                <p className='text-[#ee9972]'>$12.99</p>
              </div>
              <p className='mb-6'>
              Our strawberry salad is a sweet and delicious treat that is perfect 
              for a light lunch or as a refreshing side dish. It's made with a mix of 
              fresh greens and topped with juicy, ripe strawberries, crumbled feta 
              cheese, and crunchy almonds. It's finished with a drizzle of balsamic 
              vinaigrette, which adds a tangy contrast to the sweetness of the fruit.
              </p>
              <div className='w-full flex justify-start items-center'>
                <p className='font-semibold mr-1 text-[#333]'>
                  Takeout available!
                </p>
              </div>
            </div>
          </div>
          {/*CARD*/}
          <div className='card bg-[#edefee] rounded'>
            <div className='card-image cover w-full'>
              <img
                src={salmonBrusch}
                alt='food'
                className='w-full cover rounded-t-sm h-[250px]'
              />
            </div>
            <div className='card-details px-6 py-6'>
              <div className='card-main flex items-center justify-between mb-2'>
                <h3 className='text-3xl'>Salmon Bruschetta</h3>
                <p className='text-[#ee9972]'>$15.99</p>
              </div>
              <p className='mb-6'>
              Our salmon bruschetta board is the perfect appetizer or light meal 
              for any occasion. It features tender, flaky salmon that has been grilled 
              to perfection and topped with a bright and flavorful bruschetta mix of 
              diced tomatoes, basil, and red onion.
              </p>
              <div className='w-full flex justify-start items-center'>
                <p className='font-semibold mr-1 text-[#333]'>
                  Takeout not available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
