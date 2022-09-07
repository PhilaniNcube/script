import React, {Fragment} from 'react'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { BsFillCartFill } from "react-icons/bs";
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Image from 'next/future/image';

interface LinkType  {
  name: string
  url: string
}


const mainLinks: LinkType[] = [
{
  name: 'Home',
  url: '/'
},
{
  name: 'About Us',
  url: '/about'
},
{
  name: 'Contact Us',
  url: '/contact'
},
]

const services: LinkType[] = [
  {
    name: 'Entrepreneurs',
    url: '/entrepreneurs'
  },
  {
    name: 'Brands',
    url: '/brands'
  },
  {
   name:'Consultations',
   url: '/consultations'
  }
]


const Navbar = () => {

const router = useRouter()

  return (
    <header className="min-h-20">
      <div className="max-w-7xl h-full mx-auto px-6 md:px-4 lg:px-0 flex justify-between items-center">
         <div className="flex text-red-600 items-center cursor-pointer">
           <Link href="/">
             <Fragment>
               <Image src="/images/logo.png" alt="logo" className="h-16 w-16 object-cover" />
             </Fragment>
           </Link>
         </div>

         {/* Desktop Menu Starts*/}
         <div className="flex justify-between flex-1 items-center">

          <nav className="md:flex ml-6  items-center hidden">
            {mainLinks.map((link) => (
              <span key={link.name} className="text-sm px-3 mx-2 transition-all duration-700 hover:text-gray-900 hover:bg-slate-300 rounded-lg py-2 font-medium text-gray-700 uppercase">
                <Link href={link.url}>{link.name}</Link>
              </span>
            ))}

      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 uppercase hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Services
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-gray-600"
              aria-hidden="true"
            />
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
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right z-[100] divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">

            {services.map(service => (
              <Menu.Item key={service.name}>
                  {({ active }) => (

                    <button
                    onClick={() => router.push(service.url)}
                        className={`${
                          active ? 'bg-red-600 text-white' : 'text-gray-700'
                        } group uppercase font-medium flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                            {service.name}
                      </button>

                  )}
              </Menu.Item>
            ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      </nav>












        </div>




          <Link href="/contact" passHref>
            <button className="ml-6 px-4 py-2 shadow-md  bg-green-600 hover:bg-green-700 text-white text-base uppercase rounded-full font-medium" >Get Started</button>
          </Link>

      </div>
    </header>
  )
}

export default Navbar
