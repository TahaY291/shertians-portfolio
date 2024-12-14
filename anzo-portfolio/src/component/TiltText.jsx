import React from 'react'

function TiltText({refer}) {
  return (
    <div id='tiltDiv' ref={refer} className='mt-[22vh]'>
                    <h1 className='text-[4.2vw] leading-[3vw] uppercase font-[anz1]'>I am <span className='text-black font-[anz1]'>DARK MODE</span>™</h1>
                    <h1 className='text-[8vw] leading-[8vw] uppercase font-[anz1]'>Designer</h1>
                    <h1 className='text-[4.2vw] uppercase leading-[3vw] font-[anz1]'>to hire</h1>
                </div>
  )
}

export default TiltText