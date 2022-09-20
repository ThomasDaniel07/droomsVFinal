import React, { useRef } from 'react';

import Logo from '../assets/Logo2.jpeg';

import "@fontsource/raleway";

import "@fontsource/roboto"

// FUNCTION FOR VERIFY THE LOGIN

const sendData = async(url,data)=>{

  const peticion = await fetch (url,{

    method:'POST',

    body: JSON.stringify(data),

    headers:{'Content-Type':'appiclation/json'}
    
  })
  const result = await peticion.json();

  return result
}

function Login(props) {

  //===============================
  const Refuser = useRef(); //=====

  const Refentity = useRef(); //=== create variables where the login data is

  const Refpassword = useRef();//== 
  
  // FUNCTION FOR VERIFY LOGIN

  const peticion = async ()=>{
    
    const Data = {

      'user':Refuser.current.value,

      'entity':Refentity.current.value,

      'password':Refpassword.current.value

    }
    const URL = 'http://localhost/drooms/backend/Conection.php';

    const result = await sendData(URL,Data)

    const boxError = document.querySelector('.boxError')
    
    if (result.ERROR) {
      boxError.innerHTML = result.ERROR;
      boxError.style = 'padding:10px;'
    }else {
      boxError.innerHTML="";
      boxError.style = 'padding:0px;'
      props.access(result.STATUS);
    }
  }

  return (
    <div className='background-style1 w-full h-screen flex flex-col items-center justify-center'>

      {/* LOGO OF DROOMS */}

      <img src={Logo} alt="Logo of Drooms" className='w-[217px] h-[210px] rounded-full animate-[bounce_5s_linear_infinite] shadow-md lg:w-72 lg:h-72' />
      
      {/* CONTAINER OF THE LOGIN FORM */}

      <div className="form flex flex-col text-[18px] w-[249px] lg:w-96">

        {/* INPUT FOR USER */}

        <input type="text" ref={Refuser} name="user" id="user" placeholder='Usuario' className='p-1  placeholder:text-black shadow-lg font-semibold border-2  border-[#21afd5]' />

        <select name="" id="" ref={Refentity} className='bg-white placeholder:font-[700] mt-[40px] p-1 shadow-lg border-2  border-[#21afd5]'>

          <option selected disabled className='font-semibold'>Entidad</option>

          <option value="sanjose" className='font-semibold'>San Jose</option>

          <option value="sangabriel" className='font-semibold'>San Gabriel</option>

          <option value="caldas" className='font-semibold'>Inse Caldas</option>

        </select>

        <input type="password" name="" ref={Refpassword} id="" placeholder='Contraseña' className='mt-[40px] shadow-lg p-1 placeholder:text-black font-semibold border-2  border-[#21afd5]' />

        <div className='boxError bg-red-400 text-white mt-[40px]'>
        </div>

        <button onClick={peticion} className='bg-[#21afd5] text-white mt-[40px] p-1 w-[146px] m-auto font-bold shadow-xl hover:bg-[#0c4586] active:bg-[#0c4586] rounded-sm'>Login</button>


      </div>

      <p className='m-5 text-center font-[Roboto] text-lg md:text-xl text-white'>
        ©COPYRIGHT 2022. Todos los derechos reservados. DIRECT BY Daniel Thomas
      </p>

    </div>
  )
}

export default Login