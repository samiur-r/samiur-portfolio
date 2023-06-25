import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="pt-24 2xl:pb-16">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/* Left Col */}
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <p className="uppercase tracking-loose w-full">This is me</p>
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Samiur. I am a Full Stack Engineer
          </h1>
          <p className="leading-normal text-2xl mb-8">
            Empowering businesses with elegant and robust digital solutions
            through cutting-edge technologies.
          </p>
          <a
            href="mailto:samiur.rahman.akif@gmail.com"
            className="inline-block mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Book a call with me
          </a>
        </div>
        {/* Right Col */}
        <div className="w-full md:w-3/5 py-6 text-center">
          <Image width={613} height={529} src="/hero.png" alt="hero" priority />
        </div>
      </div>
    </div>
  )
}

export default Hero
