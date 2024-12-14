import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Page1Bottom() {

    useGSAP(()=> {
        gsap.to('#banner img' , {
            rotate: 360,
            duration: 6,
            repeat:-1,
            ease: 'linear'
        })
    }, [])

  return (
    <div className='absolute left-0 p-28 pb-16 pr-20 flex items-end justify-between bottom-0 w-full'>
        <div>
                <h2 className='text-xl font-[anz3] '>BRAND DESIGN | WEBSITE DESIGN</h2>
                <h2 className='text-xl font-[anz2] text-[#9b9b9b]'>BESPOKE FREELANCE</h2>
        </div>
        <div id='banner' className='grid gap-5'>
            <img className='h-20' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_78,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png" alt="" />
            <img className='h-20' src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_78,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EN_legend_large.png" alt="" />
        </div>
    </div>
  )
}

export default Page1Bottom