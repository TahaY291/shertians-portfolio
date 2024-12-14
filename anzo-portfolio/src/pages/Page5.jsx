import React from 'react'

function Page5() {
    return (
        <div className='h-screen relative pt-10 px-5 bg-white'>
            <div className='h-full overflow-hidden w-full bg-black rounded-[30px]'>
                <video autoPlay="true" loop muted className='h-full w-full object-cover ' src="/src/assets/file1.mp4"></video>
                <h1 className='font-[anz4] text-[40vw] uppercase -bottom-[30%] left-[8%]  absolute '>About</h1>
            </div>
        </div>
    )
}

export default Page5