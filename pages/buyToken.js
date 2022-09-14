import Head from "next/head";
import Navbar from "../components/Navbar";
import style from '../styles/signedIn.module.css';
import * as RiIcons from 'react-icons/ri';
import { useState } from "react";
import Footer from "../components/footer";
import Link from "next/link";


const buyToken = () => {
  const [showBuying, setShowBuying] = useState(false)
  const [buying, setBuying] = useState('Co2E')

  const toggleBuying = () => {
    setShowBuying(!showBuying);
  }
  const changeBuying= (e) => {
    setBuying(e);
    setShowBuying(!showBuying)
  
  }

  return (
    <div>
      <Head>
        <title>Chemotronix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className={style.bg}></div>
      <main className="flex justify-center ">
        <div className="container px-5">
          <Navbar/>

          <div className="mt-24 w-full flex justify-start">
          <Link href={"/signedIn"}>
            <div className="bg-green-800 h-16 rounded-md cursor-pointer px-12 flex items-center">
              <p className=" text-white">Back</p>
            </div>
          </Link>
          </div>

          
          <div className="mt-16 w-full flex justify-center">
            <div className="flex flex-col items-center w-full md:w-1/2">
              <div className="flex flex-col justify-center mb-7">
                  <p>buy carbon credit</p>
                  <h1 className="text-4xl md:text-6xl font-bold">How would you like to buy</h1>
              </div>

              <div className="w-full relative">
                <input type="number" placeholder="Enter amount" className="bg-green-100 pl-36 w-full border-2 border-green-300 cursor-pointer rounded-lg px-8 py-6 flex  justify-center items-center"/>
                <div className="absolute top-3 left-10 flex  items-center cursor-pointer" onClick={toggleBuying}>
                    <p className="font-bold">{buying}</p>
                    <RiIcons.RiArrowDropDownLine className="text-6xl"/>
                </div>
                {
                  showBuying &&(
                    <div className="absolute top-[90px] w-44 z-10">
                        <div className="bg-slate-50 w-full border-2 cursor-pointer py-6 border-slate-50 border-t-green-800">
                          <ul className="flex flex-col w-full justify-center items-center">
                            <li className=" py-3 hover:bg-slate-300 w-full text-center" onClick={()=>changeBuying('Co2E')}>
                              <p>Co2E</p> 
                            </li>
                            <li className=" py-3 hover:bg-slate-300 w-full text-center" onClick={()=>changeBuying('USDT')}>
                              <p>USDT</p>
                            </li>
                          </ul>
                        </div>
                    </div>                          
                  )
                  
                }
              </div>
              <div className="bg-green-800 h-16 mt-10 rounded-md cursor-pointer px-12 flex items-center">
                <p className=" text-white">Proceed with purchase</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <div className="flex flex-col items-center relative">
        <div className="container">
          <Footer></Footer>
        </div>
        <div className="bg-[#E9F4FB] h-24 w-full bottom-0 absolute z-[-1]"></div>
      </div>
        
    </div>
  )
}

export default buyToken