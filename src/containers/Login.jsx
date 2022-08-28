import React, { useRef } from 'react';

import Logo from '../assets/Logo.png';

import axios from 'axios'

import "@fontsource/raleway";

import "@fontsource/roboto"

// FUNCTION FOR VERIFY THE LOGIN

const VerificationLogin = (method,url,data)=>{
  axios({
    method:method,
    url:url,
    data: data
  })
  .then((e)=>{
    console.log(e.data);
  })
}

function Login() {

  //===============================
  const Refuser = useRef(); //=====

  const Refentity = useRef(); //=== create variables where the login data is

  const Refpassword = useRef();//== 
  
  // FUNCTION FOR VERIFY LOGIN

  const peticion = ()=>{
    

    const Data = {

      'usuario':Refuser.current.value,

      'entidad':Refentity.current.value,

      'contrasena':Refpassword.current.value

    }

    const method = 'POST';

    const URL = 'http://localhost/drooms_query/funciones.php';

    

  }

  return (
    <div className='bg-[#C7E5D3] w-full h-screen flex flex-col items-center justify-center'>

      {/* LOGO OF DROOMS */}

      <img src={Logo} alt="Logo of Drooms" className='rounded-full w-[217px] h-[210px] animate-[bounce_5s_linear_infinite] shadow-md' />
      
      {/* CONTAINER OF THE LOGIN FORM */}

      <div className="form flex flex-col text-[18px] w-[249px]">

        {/* INPUT FOR USER */}

        <input type="text" ref={Refuser} name="user" id="user" placeholder='Usuario' className='p-1  placeholder:text-black shadow-lg' />

        <select name="" id="" ref={Refentity} className='bg-white placeholder:font-[700] mt-[40px] p-1 shadow-lg'>

          <option selected disabled>Entidad</option>

          <option value="sanjose">San Jose</option>

          <option value="sangabriel">San Gabriel</option>

          <option value="caldas">Inse Caldas</option>

        </select>

        <input type="password" name="" ref={Refpassword} id="" placeholder='Contraseña' className='mt-[40px] shadow-lg p-1 placeholder:text-black' />

        <button onClick={peticion} className='bg-[#25544B] text-white mt-[40px] p-1 w-[146px] m-auto font-bold shadow-lg hover:bg-[#3d8b7d] active:bg-[#3d8b7d]'>Login</button>

      </div>

      <p className='m-5 text-center font-[Roboto] text-lg md:text-xl'>
        ©COPYRIGHT 2022. Todos los derechos reservados. DIRECT BY Daniel Thomas
      </p>

    </div>
  )
}

export default Login