import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-8 border-t border-gray-200">
      <div className="px-4 max-w-7xl mx-auto py-12">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="w-full">
           <h3 className="font-medium text-2xl text-gray-700 mb-4">Social Media</h3>

                <Link href="https://facebook.com">
                    <a className="text-lg font-medium text-sky-500 flex items-center">
                        <FaFacebookF /> <span className="text-gray-700 pl-3">Facebook</span>
                    </a>
                </Link>
                <Link href="https://twitter.com">
                <a className="text-lg font-medium text-sky-500 flex items-center">
                        <FaTwitter className="" /> <span className="text-gray-700 pl-3">Twitter</span>
                    </a>
                </Link>
                <Link href="https://instagram.com">
                <a className="text-lg font-medium text-sky-500 flex items-center">
                        <FaInstagram className="" /> <span className="text-gray-700 pl-3">Instagram</span>
                    </a>
                </Link>
                <Link href="https://youtube.com">
                <a className="text-lg font-medium text-sky-500 flex items-center">
                        <FaYoutube className="" /> <span className="text-gray-700 pl-3">YouTube</span>
                    </a>
                </Link>
          </div>
          <div className="w-full">
          <h3 className="font-medium text-2xl text-gray-700 mb-4">Getting Started</h3>
              <Link href="/">
                <a className="text-lg font-medium text-gray-700 flex items-center">
                  Home      
                </a>
              </Link>
              <Link href="/about">
                <a className="text-lg font-medium text-gray-700 flex items-center">
                  About Us     
                </a>
              </Link>
              <Link href="/contact">
                <a className="text-lg font-medium text-gray-700 flex items-center">
                  Contact Us     
                </a>
              </Link>
          </div>
          <div className="w-full">
          <h3 className="font-medium text-2xl text-gray-700 mb-4">Services</h3>
              <Link href="/entrepreneurs">
                <a className="text-lg font-medium text-gray-700 flex items-center">
                  Entrepreneurs      
                </a>
              </Link>
              <Link href="/brands">
                <a className="text-lg font-medium text-gray-700 flex items-center">
                  Brands   
                </a>
              </Link>
              <Link href="/consultations">
                <a className="text-lg font-medium text-gray-700 flex items-center">
                  Consultations    
                </a>
              </Link>
          </div>
          <div className="w-full">
          <h3 className="font-medium text-2xl text-gray-700 mb-4">Join Us</h3>
              <Link href="/register">
                <a className="text-lg font-medium text-gray-700 flex items-center">
                  Register      
                </a>
              </Link>
              <Link href="/sign-in">
                <a className="text-lg font-medium text-gray-700 flex items-center">
                  Sign In 
                </a>
              </Link>
           
          </div>
              
        </div>
      </div>
    </footer>
  )
}

export default Footer
