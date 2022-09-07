import Image from 'next/image'
import React from 'react'

const AboutSectionOne = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto min-h-[60vh] py-8 px-6 md:px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="w-full pr-4">
            <h2 className="text-xl md:text-2xl font-bold lg:text-3xl text-gray-700">
              Our Mission
            </h2>
            <p className="text-md md:text-lg font-medium text-gray-600 max-w-[70ch] pr-5">
              Building a new status quo for partnership and revenue capacity for
              social-entrepreneurship, brand development and ecommerce trading.
              By creating a dynamic and channels to earning, product placement
              and mass advertising for shared profits and business growth.
              Scripting partnerships, marketing and retail activities suited for
              every need.
            </p>
          </div>
          <video
            className="w-full aspect-video rounded-lg"
            autoPlay={false}
            controls={true}
          >
            <source src="/images/video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mt-6">
          <div className="w-full">
            <div className="w-full overflow-hidden aspect-square rounded-xl">
              <Image
                src="/images/noxolo.jpg"
                width={300}
                height={300}
                alt="ceo"
                className="w-full object-cover aspect-square rounded-xl"
              />
            </div>
            <h3 className="text-gray-800 font-medium text-md md:text-lg">
              Noxolo Thabatha
            </h3>
            <p className="text-base text-gray-500">Founder and CEO</p>
          </div>
          <div className="w-full">
            <div className="w-full overflow-hidden aspect-square rounded-xl">
              <Image
                src="/images/zia.jpg"
                width={300}
                height={300}
                alt="team"
                className="w-full object-cover aspect-square rounded-xl"
              />
            </div>
            <h3 className="text-gray-800 font-medium text-md md:text-lg">
              Zia Thabatha
            </h3>
            <p className="text-base text-gray-500">COO</p>
          </div>
          <div className="w-full">
            <div className="w-full overflow-hidden aspect-square rounded-xl">
              <Image
                src="/images/noni.jpg"
                width={300}
                height={300}
                alt="team"
                className="w-full object-cover aspect-square rounded-xl"
              />
            </div>
            <h3 className="text-gray-800 font-medium text-md md:text-lg">
              Noni Peter
            </h3>
            <p className="text-base text-gray-500">Business Manager</p>
          </div>
          <div className="w-full">
            <div className="w-full overflow-hidden aspect-square rounded-xl">
              <Image
                src="/images/kia.jpg"
                width={300}
                height={300}
                alt="team"
                className="w-full object-cover aspect-square rounded-xl"
              />
            </div>
            <h3 className="text-gray-800 font-medium text-md md:text-lg">
              Kea Shupi
            </h3>
            <p className="text-base text-gray-500">Brand Specialist</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSectionOne
