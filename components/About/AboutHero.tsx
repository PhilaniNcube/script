import React from 'react'
import Image from 'next/image'

const AboutHero = () => {
  return (
    <main className="min-h-[60vh]">
        <div className="max-w-7xl mx-auto min-h-[60vh] py-8">
            <div className="grid grid-cols-1 h-full min-h-[60vh] md:grid-cols-2 gap-6">
                <div className="w-full h-full flex flex-col justify-center">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl text-gray-700"><span><Image src="/images/thumb.png" width={40} height={40} /></span><span className="pl-2 font-bold">About Us</span></h1>
                    <p className="text-md md:text-lg text-gray-500 font-medium">
                        <span className="text-red-600">SCRIPT BEAUTY AND BRAND</span> is a multi- approach e-commerce business, with three main avenues of operation,. Creating an all-in-one, first of its kind pltform for a community of beauty and cosmetics suppliers, sellers and consumers.
                    </p>
                </div>
                <div className="w-full h-full grid grid-cols-3 gap-3 lg:gap-6">
                    <div className="h-full flex items-center">
                        <img src="/images/selfie.jpg" alt="selfie" className="h-3/4 w-full object-cover rounded-xl shadow-lg shadow-red-400/30" />
                    </div>
                    <div className="h-full flex items-center">
                        <img src="/images/lotion.jpg" alt="lotion" className="h-full w-full object-cover rounded-xl shadow-lg shadow-red-400/30" />
                    </div>
                    <div className="h-full flex items-center">
                        <img src="/images/youth.jpg" alt="youth" className="h-3/4 w-full object-cover rounded-xl shadow-lg shadow-red-400/30" />
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default AboutHero