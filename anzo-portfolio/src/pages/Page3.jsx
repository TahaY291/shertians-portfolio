import React from 'react'
import video from '../assets/file.mp4'

const Page3 = () => {
    return (
        <div className='h-screen relative flex items-center justify-center bg-white'>
            <img className='absolute z-20' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_1045,h_601,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png" alt="" />
            <video autoPlay="true" loop muted className='z-10 h-[70vh] w-[50vw] relative object-center' src={video}></video>
            <div className='h-0.5 w-3/5 absolute top-[30%] z-0 bg-black'></div>
            <div className='h-0.5 w-4/5 absolute top-[50%] z-0 bg-black'></div>
            <div className='h-0.5 w-full absolute top-[70%] z-0 bg-black'></div>
        </div>
    )
}

export default Page3
