import React from 'react'
import Image from 'next/image'

const social = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dev-samiur/',
    icon: '/social/linkedin.svg'
  },
  {
    name: 'Github',
    href: 'https://github.com/samiur-r',
    icon: '/social/github.svg'
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/dev_samiur',
    icon: '/social/twitter.svg'
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/samiurakif/',
    icon: '/social/instagram.svg'
  }
]

const Footer = () => {
  return (
    <footer className="bg-white px-10">
      <div className="container max-w-6xl py-10 mx-auto flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex justify-center">
            <a
              className="text-[#34e89e] no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              <Image width={40} height={40} src="/rocket.svg" alt="logo" />
              SAM.
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            {social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-gray-400"
              >
                <span className="sr-only">{item.name}</span>
                <Image src={item.icon} width={30} height={30} alt="social" />
              </a>
            ))}
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-x-1">
              <a
                href="https://wa.me/+8801744935905"
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
                aria-label="whatsapp"
              >
                <Image
                  src="/social/whatsapp.svg"
                  width={35}
                  height={35}
                  alt="social"
                />
              </a>

              <a
                className="text-gray-900"
                href="https://wa.me/+8801744935905"
                target="_blank"
                rel="noreferrer"
                aria-label="whatsapp"
              >
                +(880) 1744935905
              </a>
            </div>
            <div className="flex items-center gap-x-1 ml-1">
              <a
                href="https://wa.me/+8801744935905"
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
                aria-label="whatsapp"
              >
                <Image
                  src="/social/gmail.svg"
                  width={20}
                  height={20}
                  alt="gmail"
                />
              </a>

              <a
                className="text-gray-900 ml-2"
                href="mailto:samiur.rahman.akif@gmail.com"
              >
                samiur.rahman.akif@gmail.com
              </a>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2023 Samiur. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
