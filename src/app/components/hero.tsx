"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { RiNpmjsFill } from 'react-icons/ri';
import Typewriter from 'typewriter-effect';


const Hero = () => {
  return (
    <div className='bg-blue-200'>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="w-72 h-72 xl:w-96 xl:h-96 rounded-full overflow-hidden">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/imagespic.png"
              height={800}
              width={800}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Hello, {`i'm`} <br /> <span className='text-blue-500'>AQSA MEMON</span>
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: ['Web Developer', 'Front-End Developer','UI/UX Designer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className='w-[150px] h-[2px] bg-black mb-4'></div>
            <p className="mb-8 leading-relaxed">
            {`I’m`} a web developer and designer dedicated to turning ideas into interactive, visually captivating, and fully responsive websites. My mission is to blend creativity with technical precision, building experiences that resonate, inspire, and stand out in a digital world. Lets work together to bring your vision into reality, one pixel at a time.
            </p>
            <div className="flex flex-col items-center space-y-4">
              <button className="inline-flex text-black bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg">
                Hire Me
              </button>
              <div className="flex gap-6 justify-center">
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
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero;
