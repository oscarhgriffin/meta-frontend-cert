import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom"; //Internal linking
import { HashLink } from "react-router-hash-link"; //hash linking

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer class='mt-6 p-4 rounded-lg md:px-6 md:py-8 w-full mx-auto bg-grey border-t shadow-sm'>
      <div className='max-w-5xl mx-auto' id='container'>
        <div class='sm:flex sm:items-center sm:justify-between'>
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt='Little Lemon Logo'
            className='cursor-pointer h-12 mr-3'
          />
          <ul class='flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400'>
            <li>
              <span
                onClick={() => navigate("/")}
                class='mr-4 hover:underline md:mr-6 cursor-pointer'
              >
                Home
              </span>
            </li>
            <li>
              <span class='mr-4 hover:underline md:mr-6 cursor-pointer'>
                <HashLink smooth to='/#about'>
                  About
                </HashLink>
              </span>
            </li>
            <li>
              <span
                onClick={() => navigate("/booking")}
                class='mr-4 hover:underline md:mr-6 cursor-pointer'
              >
                Reserve
              </span>
            </li>
          </ul>
        </div>
        <hr class='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <span class='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2023{" "}
          <span onClick={() => navigate("/")} class='hover:underline'>
            Little Lemon™
          </span>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
