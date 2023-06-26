import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
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

interface MobileNavProps {
  open: boolean
  handleSetOpen: (open: boolean) => void
}

const MobileNav: React.FC<MobileNavProps> = ({ open, handleSetOpen }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleSetOpen}>
        {/* <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
        </Transition.Child> */}

        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="pointer-events-auto relative w-screen max-w-xs">
                <div className="flex h-full flex-col overflow-y-scroll bg-[#0f3443] py-6 shadow-xl">
                  <div className="px-4 sm:px-6 flex items-start justify-between">
                    <Dialog.Title className="text-base font-semibold leading-6 text-gray-900 -mt-3">
                      <Link href="/">
                        <a className="text-[#34e89e] no-underline outline-none hover:no-underline font-bold text-2xl lg:text-4xl">
                          <Image width={40} height={40} src="/rocket.svg" />
                          SAM.
                        </a>
                      </Link>
                    </Dialog.Title>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        className="rounded-md bg-[#0f3443] text-gray-400 hover:text-gray-500"
                        onClick={() => handleSetOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon
                          className="w-8 h-8 text-[#34e89e] outline-none"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>

                  <div className="relative mt-10 ml-5 flex-1 px-4 sm:px-6 flex flex-col justify-between">
                    <ul className="flex flex-col gap-5 text-white">
                      <li className="bg-gray-900 p-3 rounded-tl-lg rounded-bl-lg">
                        <Link href="/">
                          <a
                            className="hover:text-[#34e89e] cursor-pointer"
                            onClick={() => handleSetOpen(false)}
                          >
                            Home
                          </a>
                        </Link>
                      </li>
                      <li className="bg-gray-900 p-3 rounded-tl-lg rounded-bl-lg">
                        <a
                          href="#projects"
                          className="hover:text-[#34e89e] cursor-pointer"
                          onClick={() => handleSetOpen(false)}
                        >
                          Projects
                        </a>
                      </li>
                      <li className="bg-gray-900 p-3 rounded-tl-lg rounded-bl-lg">
                        <a
                          href="#contact"
                          className="hover:text-[#34e89e] cursor-pointer"
                          onClick={() => handleSetOpen(false)}
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                    <div className="flex justify-center space-x-6 mt-16">
                      {social.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-gray-500 hover:text-gray-400"
                        >
                          <span className="sr-only">{item.name}</span>
                          <Image src={item.icon} width={30} height={30} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default MobileNav
