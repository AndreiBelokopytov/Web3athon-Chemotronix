import React from 'react'
import Image from "next/image"
import Mpic1 from "../images/microsoftPic1.jpg"
import Mpic2 from "../images/microsoftPic2.jpg"
function MicrosoftSection() {
  return (
    <div className='flex items-center justify-around lg:flex-nowrap flex-wrap px-10'>
        <div><Image src={Mpic1}/></div>
        <div><Image src={Mpic2}/></div>
        
        
    </div>
  )
}

export default MicrosoftSection