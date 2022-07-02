import Image from 'next/image'
import React from 'react'

const AboutSectionOne = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto min-h-[60vh] py-8 px-6 md:px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className='w-full pr-4'>
            <h2 className="text-xl md:text-2xl font-bold lg:text-3xl text-gray-700">
              Our Mission
            </h2>
            <p className="text-md md:text-lg font-medium text-gray-600 max-w-[70ch] pr-5">
              We aim to make a meaningful contribution to improving youth
              entrepreneurship and digital marketing by improving the digital
              and economic resilience of young people, for African businesses to
              efficiently promote and profit on an e-commerce platform that
              prioritizes an inclusive and sustainable social economic trade.
            </p>
          </div>
          <video className="w-full aspect-video rounded-lg" autoPlay={false} controls={true}>
            <source src="/images/video.mp4" type="video/mp4"/>

          </video>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-6">
          <div className="w-full">
            <div className="w-full overflow-hidden aspect-square rounded-xl">
              <Image
                src="/images/team1.jpg"
                width={300}
                height={300}
                alt="team"
                className="w-full object-cover aspect-square rounded-xl"
              />
            </div>
            <h3 className="text-gray-800 font-medium text-md md:text-lg">
              Andile Gumede
            </h3>
            <p className="text-base text-gray-500">Co-founder and CEO</p>
          </div>
          <div className="w-full">
            <div className="w-full overflow-hidden aspect-square rounded-xl">
              <Image
                src="/images/team2.jpg"
                width={300}
                height={300}
                alt="team"
                className="w-full object-cover aspect-square rounded-xl"
              />
            </div>
            <h3 className="text-gray-800 font-medium text-md md:text-lg">
              Lerato Mokoena
            </h3>
            <p className="text-base text-gray-500">Co-founder and COO</p>
          </div>
          <div className="w-full">
            <div className="w-full overflow-hidden aspect-square rounded-xl">
              <Image
                src="/images/team3.jpg"
                width={300}
                height={300}
                alt="team"
                className="w-full object-cover aspect-square rounded-xl"
              />
            </div>
            <h3 className="text-gray-800 font-medium text-md md:text-lg">
              Yolanda Coetzee
            </h3>
            <p className="text-base text-gray-500">Business Development</p>
          </div>
          <div className="w-full">
            <div className="w-full overflow-hidden aspect-square rounded-xl">
              <Image
                src="/images/team4.jpg"
                width={300}
                height={300}
                alt="team"
                className="w-full object-cover aspect-square rounded-xl"
              />
            </div>
            <h3 className="text-gray-800 font-medium text-md md:text-lg">
              Lwazi Zola
            </h3>
            <p className="text-base text-gray-500">Brand Specialists</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSectionOne
