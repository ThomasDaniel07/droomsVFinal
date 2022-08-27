import React from 'react';
import Logo from '../assets/Logo.png';
import "@fontsource/raleway";
import "@fontsource/roboto"

function Login() {
  return (
    <div className='bg-[#C7E5D3]  w-screen h-screen flex flex-col items-center justify-center'>
      <img src={Logo} alt="Logo of Drooms" className='rounded-full w-[217px] h-[210px] animate-[bounce_5s_linear_infinite] shadow-md' />
      <div className="form flex flex-col text-[18px] w-[249px] ">
        <input type="text" name="user" id="user" placeholder='Usuario' className='p-1  placeholder:text-black placeholder:font-[700] shadow-lg' />
        <select name="" id="" className='bg-white placeholder:font-[700] mt-[40px] p-1 shadow-lg'>
          <option selected disabled>Entidad</option>
          <option value="sanjose">San Jose</option>
          <option value="sangabriel">San Gabriel</option>
          <option value="caldas">Inse Caldas</option>
        </select>
        <input type="password" name="" id="" placeholder='Contraseña' className='mt-[40px] shadow-lg p-1 placeholder:text-black placeholder:font-[700]' />
        <button className='bg-[#25544B] text-white mt-[40px] p-1 w-[146px] m-auto font-bold'>Login</button>
      </div>
      <p className='m-5 text-center font-[Roboto] text-lg'>
        ©COPYRIGHT 2022. Todos los derechos reservados. DIRECT BY Daniel Thomas
      </p>
    </div>
  )
}

export default Login