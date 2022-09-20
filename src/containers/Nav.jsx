import React, { useState } from "react";
import { FaBars, FaTimes, FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import Logo from '../assets/Logo2.png'

const Nav = ()=>{


  const [nav,setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return(
    <div className="fixed w-full h-[100px] flex flex-wrap justify-around items-center px-4 background-style1 text-white z-40">
      <div className="flex flex-wrap items-center justify-between">
        <Link to={'/Inicio'}>
          <img src={Logo} alt="Logo de Drooms" width={180}/>
        </Link>
      </div>

      <ul className="md:flex hidden">
        <Link to={'/Inicio'}><li id='navElemnt' className="text-white hover:bg-white hover:text-black hover:rounded-3xl hover:drop-shadow-md p-[15px] font-['SF Compact Display'] font-semibold drop-shadow-md">Inicio</li></Link>
        <Link to={'/QrScan'}><li id='navElemnt' className="text-white hover:bg-white hover:text-black hover:rounded-3xl hover:drop-shadow-md p-[15px] font-['SF Compact Display'] font-semibold drop-shadow-md">Escanear QR</li></Link>
        <Link to={'/Listado'}><li id='navElemnt' className="text-white hover:bg-white hover:text-black hover:rounded-3xl hover:drop-shadow-md p-[15px] font-['SF Compact Display'] font-semibold drop-shadow-md">Mostrar Listado</li></Link>
        <li id='navElemnt' className="text-white hover:bg-white hover:text-black hover:rounded-3xl hover:drop-shadow-md p-[15px] font-['SF Compact Display'] font-semibold drop-shadow-md">Hacer Anotacioes</li>
      </ul>

      {/* Hamburger button */}

      <div onClick={handleClick} className="z-50 md:hidden">
        {!nav ?<FaBars className="cursor-pointer text-3xl text-white" /> : <FaTimes className="cursor-pointer text-3xl text-white block absolute right-0 z-50" />}
      </div>

      {/* Movile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#477BFF] flex flex-col justify-center items-center z-50'}>
        <li className="py-6 text-4xl">Informacion</li>
        <li className="py-6 text-4xl">Escanear QR</li>
        <li className="py-6 text-4xl">Mostrar Listado</li>
      </ul>

      {/* Social Menu */}

      <div className="hidden lg:flex fixed flex-col top-[34%] left-[-5px]">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-95px] hover:ml-[-20px] duration-300 ">
            <a href="/" className="flex justify-between items-center w-full text-gray-100 font-semibold bg-blue-600 p-[10px]">
              Facebook <FaFacebook size={30}/>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-95px] hover:ml-[-20px] duration-300 ">
            <a href="/" className="flex justify-between items-center w-full text-gray-100 font-semibold bg-purple-600 p-[10px]">
              Instagram<FaInstagramSquare size={35}/>
            </a>
          </li>
	        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-95px] hover:ml-[-20px] duration-300 ">
            <a href="/" className="flex justify-between items-center w-full text-gray-100 font-semibold bg-red-600 p-[10px]">
              Email <HiOutlineMail size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav;