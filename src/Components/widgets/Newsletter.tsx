import React from 'react'
import Wrapper from '../shared/Wrapper'

const Newsletter = () => {
  return (
    <Wrapper>
    <div className="flex flex-col items-center justify-center  p-12 relative mt-36 max-w-screen-2xl">
            
    {/* Background Text */}
    <h1 className="text-6xl md:text-7xl lg:text-9xl font-extrabold opacity-10 absolute top-1/2 
    left-1/2 transform -translate-x-1/2 -translate-y-1/2">NEWSLETTER</h1>

    {/* Main Content */}
    <div className="z-10">
        <h2 className="font-bold text-4xl mb-2 text-center">Subscribe Our Newsletter</h2>
        <p className="mb-6 text-center">Get the latest information and promo offers directly</p>

        {/* Input and Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center
         gap-4">
            <input className="border border-gray-600 p-2 w-72 sm:w-auto 
            flex-grow" placeholder="Input email address" type="email" />
            <button className="bg-black text-white px-10 py-3 rounded-full
             hover:bg-gray-800 transition duration-300">Get Started</button>
        </div>
    </div>

</div></Wrapper>
  )
}

export default Newsletter
