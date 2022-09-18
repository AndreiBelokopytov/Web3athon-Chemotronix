import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col'>
        <div className="flex mx-auto px-16 py-28 w-full justify-between flex-wrap">
            <div className='flex flex-col w-auto px-5 py-10'>
                <h1 className=" text-4xl text-black font-bold">WHAT WE DO</h1>
                <a href='#' className="link link-hover">Technology</a>
                <a href='#' className="link link-hover">Our solutions</a>
            </div>
            <div className='flex flex-col w-auto px-5 py-10'>
                <h1 className=" text-4xl text-black font-bold">INDUSTRIES</h1>
                <a href='#' className="link link-hover">Grid Operators</a>
                <a href='#' className="link link-hover">Aggregators & OEMs</a>
                <a href='#' className="link link-hover">Energy Suppliers</a>
                <a href='#' className="link link-hover">E-Mobility</a>
                <a href='#' className="link link-hover">Crypto Climate Accord</a>
            </div>
            <div className='flex flex-col w-auto px-5 py-10'>
                <h1 className=" text-4xl text-black font-bold">BUILD</h1>

                <a href='#' className="link link-hover">Work with Us</a>
                <a href='#' className="link link-hover">Our Ecosystem</a>
                <a href='#' className="link link-hover">Join our Team</a>
            </div>
            <div className='flex flex-col w-auto px-5 py-10'>
                <h1 className=" text-4xl text-black font-bold">LEARN</h1>
                <a href='#' className="link link-hover">Tech Overview</a>
                <a href='#' className="link link-hover">Documentation</a>
                <a href='#' className="link link-hover">Github</a>
            </div>
            <div className='flex flex-col w-auto px-5 py-10'>
                <h1 className=" text-4xl text-black font-bold">ABOUT</h1>
                <a href='#' className="link link-hover">Terms of use</a>
                <a href='#' className="link link-hover">Privacy policy</a>
                <a href='#' className="link link-hover">Cookie policy</a>
            </div>
        </div>
        <div className="flex items-center justify-center text-center py-6 w-full">
          <p>Copyright ©2022. All right reserved | Chemotronix</p>
        </div>
    </div>
  )
}

export default Footer