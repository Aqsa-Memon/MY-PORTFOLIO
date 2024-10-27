import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='bg-blue-900'>
    <header className="text-black-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <h1 className="ml-3 text-2xl sm:text-3xl hover:text-white ">PORTFOLIO</h1>
  
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 text-sm sm:text-base hover:text-white underline" href={'/'}>HOME</Link>
          <Link className="mr-5 text-sm sm:text-base hover:text-white underline " href={'/about'}>ABOUT</Link>
          <Link className="mr-5 text-sm sm:text-base hover:text-white underline" href={'/contact'}>CONTACT</Link>
        </nav>
      </div>
    </header>
  </div>
  
  )
}

export default Header