import React from 'react'
import Nav from './Nav'

function Home() {
  return (
    <div>
        <Nav />
        <div className='background-style1 h-screen'>
          <div className='relative top-[100px] w-[90%] m-auto p-10 shadow-xl bg-neutral-900 lg:w-1/2 lg:top-[200px] md:top-[200px]'>
              <h1 className='text-4xl text-center font-extrabold text-white lg:text-5xl lg:m-2'>Bienvenido</h1>
              <p className='text-justify text-white text-xl'>Somos un aplicativo web que facilita el uso y el control de los restaurantes de comida saludable,y contribuimos a una mejor toma de decisiones de las mismas. Diseñado con herramientas de software libre para tener control y administrar los procedimientos.</p>
          </div>
        </div>
    </div>
  )
}

export default Home