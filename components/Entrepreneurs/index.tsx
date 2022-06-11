import React, { Fragment } from 'react'

const index = () => {
  return (
    <Fragment>
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h1 className="text-gray-700 font-bold text-xl md:text-2xl lg:text-4xl">Digital Entrepreneurship</h1>
        <p className="text-gray-400 text-lg md:text-xl font-medium">Monetization solutions for digital entrepreneurs across social media platforms</p>

        <div className="grid grid-cols-1 md:grid-cols-7 min-h-[60vh] mt-8">
          <div className="col-span-1 md:col-span-3 z-10 min-h-[60vh] md:row-start-1 md:col-start-1 flex items-center">
            <div className="max-h-[40vh] flex flex-col justify-center h-full z-20 backdrop-blur-sm my-auto w-full rounded-xl bg-slate-500/20 shadow-sm p-4">
              <h3 className="text-lg md:text-xl text-gray-700 font-bold">How can digital entrepreneurs and creators earn money?</h3>
              <p className="text-sm md:text-base text-gray-900 font-medium">Our platform is a place for Digital Entrepreneurs to engage with local and international brands. They can find opportunities to get products and services that they can promote on the social media channels.</p>

            </div>
          </div>
          <div className="h-[60vh] bg-sky-300 col-span-1 z-0 md:row-start-1 md:col-start-3 md:col-end-8 overflow-hidden rounded-xl">
            <img className="w-full h-full object-cover" alt="entrepreneurs" src="/images/capture.jpg" />
          </div>
        </div>


       
      </div>
    </Fragment>
  )
}
export default index

