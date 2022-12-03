import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition, Menu } from '@headlessui/react'
import {
  CursorClickIcon,
  MenuIcon,
  ViewGridIcon,
  XIcon,
  HomeIcon,
  DocumentTextIcon,
  StarIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

// Logos
import Logo from '../../assets/imgs/logo.png'
// import LogoAppName from '../../assets/app-name-icon.svg'

// Components
import ProfileNav from './ProfileNav'

const solutions = [
  {
    name: 'Home',
    href: '#home',
    icon: HomeIcon,
  },
  {
    name: 'About',
    href: '#gallerie',
    icon:  DocumentTextIcon,
  },
  {
    name: 'Latest Updates',
    href: '#latest-updates',
    icon: StarIcon,
  },
  {
    name: 'Partners',
    href: '#partners',
    icon: ViewGridIcon,
  },
  { name: 'Features', 
    href: '#features', 
    icon:  CursorClickIcon},
]

export default function Navbar(props) {
  return (
    <Popover className="fixed z-20 w-full font-montserrat">
      <div className=" max-w-[90rem] mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/Main/Welcome" className='flex items-center gap-x-6'>
              <img
                className="ml-6 h-10 w-auto sm:h-12"
                src={Logo}
                alt=""
              />
              <span className="text-white font-semibold text-3xl">Hira</span>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-tangBlue">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-4 lg:space-x-10">

            {window.location.pathname === "/Main/Welcome"
              ?
              <>
                <a href="#home" className="text-base font-medium text-white hover:text-gray-300">
                  Home
                </a>
                <a href="#about" className="text-base font-medium text-white hover:text-gray-300">
                  About
                </a>
                <a href="#latest-updates" className="text-base font-medium text-white hover:text-gray-300">
                  Latest Updates
                </a>
                <a href="#partners" className="text-base font-medium text-white hover:text-gray-300">
                  Partners
                </a>
                <a href="#features" className="text-base font-medium text-white hover:text-gray-300">
                  Features
                </a>
              </>
              :
              <>
              </>
            }
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <>
                  <a href="/signInPortal" className="whitespace-nowrap text-base font-medium text-white hover:text-gray-300">
                  Sign In
                </a>
                <a
                  href="/signUpPortal"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-tangBlue hover:bg-tangBlueDark"
                >
                  Sign Up
                </a>
            </>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-black divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src={Logo}
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-tangBlue">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon className="flex-shrink-0 h-6 w-6 text-tangBlue" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-white">{item.name}</span>
                    </a>
                  ))}
                  <>
                  <a href="/signInPortal" className="whitespace-nowrap text-base font-medium text-white hover:text-gray-300">
                  Sign In
                </a>
                <a
                  href="/signUpPortal"
                  className="whitespace-nowrap inline-flex items-left justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-tangBlue hover:bg-tangBlueDark"
                >
                  Sign Up
                </a>
               </>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}