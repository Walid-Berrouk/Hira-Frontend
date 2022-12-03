import React, { Component } from 'react'
import { Fragment } from 'react'
import { Transition, Menu } from '@headlessui/react'
import {
  BellIcon
} from '@heroicons/react/outline'

// import UserImg from "../../assets/Sample_User_Icon.jpg"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export class ProfileNav extends Component {

    constructor(props) {
        super(props);
        }

  render() {
    return (
        <>
        <button
          type="button"
          className=" p-1 rounded-full text-gray-400 hover:text-[#009245] focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-[#009245] focus:ring-[#009245]"
        >
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>
        <Menu as="div" className="ml-3 relative">
          <div>
            <Menu.Button className="flex text-sm rounded-full focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-[#009245] focus:ring-[#009245]">
              <span className="sr-only">Open user menu</span>
              {/* <img
                className="h-8 w-8 rounded-full"
                src={UserImg}
                alt=""
              /> */}
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/Main/Profile"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
                  >
                    Votre Profil
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/Main/Cartes"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
                  >
                    Vos Cartes
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
                  >
                    Paramètres
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                  onClick={() => this.props.handleLogOut()}
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
                  >
                    Se Déconnecter
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
        </>
    )
  }
}

export default ProfileNav