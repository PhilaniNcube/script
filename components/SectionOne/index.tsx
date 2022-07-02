import React from 'react'
import {services} from '../../data/index'





const SectionOne = () => {
  return (
    <section className="mt-24 mb-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-gray-800 font-bold text-2xl md:text-3xl lg:text-4xl">
          Our Services
        </h2>
        <p className="text-gray-600 text-md md:text-lg lg:text-xl mt-3">
          Collaborate with brands and creators
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mt-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="w-full relative hover:opacity-80 text-gray-50 shadow-xl shadow-red-500/10 overflow-hidden rounded-2xl p-3 transition-all duration-200 aspect-square bg-gray-700 group flex items-center justify-center flex-col"
            >
              <img
                className="absolute inset-0 w-full h-full mix-blend-overlay object-cover z-0  "
                src={service.image}
                alt={service.title}
              />
              <h4 className="text-md lg:text-lg font-bold text-center z-10">
                {service.title}
              </h4>
              <p className="text-xs mt-2 text-center z-10">
                {service.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionOne
