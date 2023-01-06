import React from "react";
import { useNavigate } from "react-router-dom"; //Internal linking
import logo from "../assets/logo.png";
import { HashLink } from "react-router-hash-link"; //hash linking

export default function Nav() {
  const navigate = useNavigate();
  return (
    <>
      <div className='bg-white border-b shadow-sm sticky top-0 z-40 px-4'>
        <nav className='flex justify-between items-center max-w-5xl mx-auto'>
          <div>
            <img
              className='h-10 w-full cursor-pointer'
              src={logo}
              alt='logo'
              onClick={() => navigate("/")} //Go to home
            />
          </div>
          <div className=''>
            <ul className='flex space-x-10'>
              <li
                className='cursor-pointer py-3 text-sm font-semibold text-gray-700 border-b-[3px] border-b-transparent'
                onClick={() => navigate("/")}
              >
                Home
              </li>
              <HashLink smooth to='/#about'>
                <li className='cursor-pointer py-3 text-sm font-semibold text-gray-700 border-b-[3px] border-b-transparent'>
                  About
                </li>
              </HashLink>
              <li
                className='cursor-pointer py-3 text-sm font-semibold text-gray-700 border-b-[3px] border-b-transparent'
                onClick={() => navigate("/booking")}
              >
                Reserve
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
