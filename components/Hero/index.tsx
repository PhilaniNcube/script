import React from 'react'

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex px-4 justify-center items-center">
      <div className="max-w-7xl mx-auto py-4 px-6 md:px-4 relative min-h-[calc(100vh-80px)] w-full rounded-lg bg-hero bg-center bg-no-repeat bg-slate-500 bg-blend-multiply flex justify-start items-center">
        <h2 className="text-xl md:text-3xl lg:text-5xl text-white md:pl-20 font-bold">
          Influencers, Brands and <br /> Consumers scripting <br />
          beauty & business on <br /> one platform
        </h2>

        <div className="hidden md:block absolute bottom-0 translate-y-8 w-full">
          <div className="md:grid grid-cols-3 gap-8 w-[80%] mx-auto">
            <div className="rounded-lg w-full bg-white h-[200px] shadow-xl p-4">
              <p className="px-3 text-sm font-medium rounded-full bg-red-200 text-red-800 inline-block">
                Tools
              </p>
              <h3 className="text-gray-800 font-bold text-lg leading-6 mt-3">
                Becoming a Digital Entrepreneur
              </h3>
              <span className="flex mt-3 items-start space-x-3">
                <img
                  alt="icon"
                  src="/images/man.jpg"
                  className="bg-gray-300 rounded-full h-16 w-16 object-cover object-center shadow-md"
                />
                <div className="flex-1 flex flex-col space-y-3">
                  <small className="text-sm font-medium text-gray-800">
                    Falconar Agnes
                  </small>
                  <p className="text-xs text-gray-700">4 weeks course</p>
                </div>
              </span>
            </div>
            <div className="rounded-lg w-full bg-white h-[200px] shadow-xl p-4">
              <p className="px-3 text-sm font-medium rounded-full bg-red-200 text-red-800 inline-block">
                Tools
              </p>
              <h3 className="text-gray-800 font-bold text-lg leading-6 mt-3">
                Curating brand specific content and growing audiences
              </h3>
              <span className="flex mt-3 items-start space-x-3">
                <img
                  alt="icon"
                  src="/images/woman.jpg"
                  className="bg-gray-300 rounded-full h-16 w-16 object-cover object-center shadow-md"
                />
                <div className="flex-1 flex flex-col space-y-3">
                  <small className="text-sm font-medium text-gray-800">
                    Jane Doe
                  </small>
                  <p className="text-xs text-gray-700">4 weeks course</p>
                </div>
              </span>
            </div>
            <div className="rounded-lg w-full bg-white h-[200px] shadow-xl p-4">
              <p className="px-3 text-sm font-medium rounded-full bg-red-200 text-red-800 inline-block">
                Tools
              </p>
              <h3 className="text-gray-800 font-bold text-lg leading-6 mt-3">
                Expanding your brand influence into a mass market business
              </h3>
              <span className="flex mt-3 items-start space-x-3">
                <img
                  alt="icon"
                  src="/images/woman-2.jpg"
                  className="bg-gray-300 rounded-full h-16 w-16 object-cover object-center shadow-md"
                />
                <div className="flex-1 flex flex-col space-y-3">
                  <small className="text-sm font-medium text-gray-800">
                    Makeup Creator
                  </small>
                  <p className="text-xs text-gray-700">4 weeks course</p>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero
