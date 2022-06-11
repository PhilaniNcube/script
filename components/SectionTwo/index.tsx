import React from 'react'
import {categories} from '../../data/index'

const SectionTwo = () => {
  return (
    <section className="my-6 bg-gray-100 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-center text-2xl md:text-3xl lg:text-4xl text-gray-800 font-bold">Brand Categories</h2>
            <p className="text-md md:text-xl text-center text-gray-600">Connect with creators</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-6">
                {categories.map((category, i) => (
                    <div key={i} className="rounded-xl overflow-hidden w-full shadow-lg p-4 min-h-[60vh] relative flex items-end">
                        <img src={category.image} alt={category.tags} className="absolute inset-0 w-full h-full object-cover z-0" />
                        <div className="bg-white/75 hover:bg-white/90 h-1/3 w-full z-10 rounded-xl text-gray-800 shadow-lg shadow-gray-800/70 hover:shadow-gray-600/40 transition-all ease-in-out  p-2">
                            <span className={`text-white bg-red-700/80 rounded-full font-medium py-1 px-2 text-xs uppercase`}>{category.tags}</span>
                            <p className="font-medium text-md text-gray-600 mt-4">{category.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default SectionTwo