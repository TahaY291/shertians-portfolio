import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

function Page6() {

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.from(".textAni", {
            transform: 'rotateX(-90deg)',
            opacity: 0,
            duration: 1.5,
            // marker: true,
            stagger: 1,
            scrollTrigger: {
                trigger: ".textAni",
                // marker: true,
                start: "top 50%",
                end: "top -300%",
                scrub: true,
            }
        })
    }, [])

    return (
        <div id='section6' className='text-center bg-white pt-10'>
            <div className='textAni'>
                <h1 className='text-[40vw] text-black font-[anz4] uppercase leading-[31vw]'>
                    Impactful
                </h1>
            </div>
            <div className='textAni'>
                <h1 className='text-[40vw] text-black font-[anz4] uppercase leading-[31vw]'>
                    Design
                </h1>
            </div>
            <div className='textAni'>
                <h1 className='text-[40vw] text-black font-[anz4] uppercase leading-[31vw]'>
                    is the
                </h1>
            </div>
            <div className='textAni'>
                <h1 className='text-[40vw] text-black font-[anz4] uppercase leading-[31vw]'>
                    Design
                </h1>
            </div>
            <div className='textAni'>
                <h1 className='text-[40vw] text-black font-[anz4] uppercase leading-[31vw]'>
                    that
                </h1>
            </div>
            <div className='textAni'>
                <h1 className='text-[40vw] text-black font-[anz4] uppercase leading-[31vw]'>
                    works!
                </h1>
            </div>
        </div>
    )
}

export default Page6