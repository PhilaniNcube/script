import React, { Fragment } from 'react'

const Contact = () => {
  return (
    <Fragment>
        <main className="bg-gradient-to-b from-gray-200 via-gray-50 to-white pt-12">
            <h1 className="text-center text-gray-800 text-2xl md:text-3xl lg:text-5xl font-bold">Contact Us</h1>

            <p className="mt-2 text-center text-base md:text-md lg:text-lg font-medium text-gray-600">Drop us a message and we will get back to you</p>
            <div className="max-w-7xl mt-6 mx-auto py-6 rounded-xl bg-white shadow-xl shadow-black/10 p-4 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
                    <div className="w-full">
                        <span className="flex">
                            <img alt="location" src="/images/map.png" className="h-6 w-6 aspect-square" />
                            <p className="font-bold text-gray-800 text-base uppercase">Address</p>
                        </span>
                        <p className="text-base font-medium text-gray-600">123 Placeholder Street, Area, City, Country, 9975</p>
                        <span className="flex mt-4">
                            <img alt="mail" src="/images/mail.png" className="h-6 w-6 aspect-square" />
                            <p className="font-bold text-gray-800 text-base uppercase">Email</p>
                        </span>
                        <p className="text-base font-medium text-gray-600">nc.example@example.com</p>
                        <span className="flex mt-4">
                            <img alt="phone" src="/images/phone.png" className="h-6 w-6 aspect-square" />
                            <p className="font-bold text-gray-800 text-base uppercase">Phone</p>
                        </span>
                        <p className="text-base font-medium text-gray-600">+27-123-4560</p>
                    </div>
                    <div className="w-full">
                        <form className="p-3 w-full">
                             <div className="flex flex-col space-y-2">
                                 <label className="text-sm md:text-md font-medium text-gray-600" htmlFor="fullName">Full Name</label>
                                 <input name="fullName" id="fullName" type="text" className="placeholder-gray-300 text-sm px-5 text-gray-400 focus:outline-none rounded-full focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-red-300 invalid:text-red-400 focus:invalid:border-red-300 border-gray-300 focus:invalid:ring-red-300" placeholder="Enter your full name"/>
                             </div>
                             <div className="flex flex-col space-y-2 mt-4">
                                 <label className="text-sm md:text-md font-medium text-gray-600" htmlFor="email">Email address</label>
                                 <input name="email" id="email" type="email" className="placeholder-gray-300 text-sm px-5 text-gray-400 focus:outline-none rounded-full focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none border-gray-300                        invalid:border-red-300 invalid:text-red-400
                                 focus:invalid:border-red-300 focus:invalid:ring-red-300" placeholder="example@example.com"/>
                             </div>
                             <div className="flex flex-col space-y-2 mt-4">
                                 <label className="text-sm md:text-md font-medium text-gray-600" htmlFor="message">Message</label>
                                 <textarea name="message" id="message" rows={5} className="placeholder-gray-300 text-sm px-5 text-gray-400 focus:outline-none rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none border-gray-300                        invalid:border-red-300 invalid:text-red-400
                                 focus:invalid:border-red-300 focus:invalid:ring-red-300" placeholder="Type your message"></textarea>
                             </div>
                             <button type="submit" className="w-full h-10 mt-3 rounded-full bg-red-600 text-white font-medium text-lg" >Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </Fragment>
  )
}

export default Contact