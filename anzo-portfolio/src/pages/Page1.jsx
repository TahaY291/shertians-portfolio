import React, { useRef, useState } from 'react'
import logo from '../assets/ANZO.avif'
import TiltText from '../component/TiltText'
import Page1Bottom from '../component/Page1Bottom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Page1() {
    const tiltRef = useRef(null)
    const [xVal, setXVal] = useState(0)
    const [yVal, setYVal] = useState(0)
    const mouseMoving = (e) => {
        setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width / 2) / 30)
        setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height / 2) / 10)
    }
    useGSAP(function () {
        gsap.to(tiltRef.current, {
            transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
            duration: 9,
            ease: `elastic.out(1,0.3)`
        })
    }, [xVal, yVal])
    return (
        <div onMouseMove={(e) => mouseMoving(e)} className='h-screen bg-white p-4'>
            <div id='tilt-main' className='h-full w-full py-16 px-20 shadow-xl shadow-black rounded-[35px] bg-cover bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1551,h_745,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg)]'>
                <img className='h-20' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_69,h_69,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png" alt="" />
                <TiltText refer={tiltRef} />
                <Page1Bottom />
            </div>
        </div>
    )
}

export default Page1