import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { RiNpmjsFill } from 'react-icons/ri'


function Footer() {
  return (
    <div className='bg-blue-400'>
        <footer className="text-gray-600 body-font">
     <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
     <a className="flex title-font font-medium items-center md:justify-start justify-center text-black">
      <span className="ml-3 text-xl">
        PORTFOLIO
      </span>
     </a>
     <p className="text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 
      PORTFOLIO —
      <a
        className="text-black ml-1"
      >
        @aqsamemon
      </a>
     </p>
     <div className="flex gap-6 justify-center ml-2 md:ml-4">
   <Link href={""} className="text-gray-500 hover:text-red-300 cursor-pointer text-lg md:text-xl lg:text-2xl">
    <FaGithub />
    </Link>
    <Link href={""} className="text-blue-600 hover:text-blue-300 cursor-pointer text-lg md:text-xl lg:text-2xl">
    <FaLinkedin />
    </Link>
    <Link href={""} className="text-red-500 hover:text-red-600 cursor-pointer text-lg md:text-xl lg:text-2xl">
    <RiNpmjsFill />
   </Link>
   </div>



  </div>
 </footer>

    </div>
  )
}

export default Footer