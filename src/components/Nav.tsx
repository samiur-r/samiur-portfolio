import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import MobileNav from './MobileNav'
// import MobileNav2 from './MobileNav2'

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`${isScrolled ? 'bg-[#0f3443]' : ''} sticky w-full z-30 top-0`}
    >
      <MobileNav open={isOpen} handleSetOpen={setIsOpen} />
      {/* <MobileNav2 open={isOpen} handleSetOpen={setIsOpen} /> */}
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <Link href="/">
            <a className="text-white toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
              <Image
                width={40}
                height={40}
                src="/rocket.svg"
                className="mr-3"
              />
              SAM.
            </a>
          </Link>
        </div>
        <div className="block lg:hidden pr-4">
          <div className="flex items-center p-1 text-[#34e89e] hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            <Bars3Icon
              className="w-9 h-9 text-[#34e89e]"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20">
          <ul className="text-white list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <Link href="/">
                <a className="inline-block py-2 px-4 hover:text-[#34e89e] font-bold no-underline">
                  Home
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <a
                className="inline-block no-underline hover:text-[#34e89e] hover:text-underline py-2 px-4"
                href="#projects"
              >
                Projects
              </a>
            </li>
            {/* <li className="mr-3">
              <Link href="/blog">
                <a className="inline-block no-underline hover:text-[#34e89e] hover:text-underline py-2 px-4">
                  Blog
                </a>
              </Link>
            </li> */}
          </ul>
          <a
            href="#contact"
            className={`${
              isScrolled ? 'gradient text-white' : 'text-gray-800 bg-white'
            } mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out`}
          >
            Get in touch
          </a>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  )
}

export default Nav
