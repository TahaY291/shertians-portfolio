import React from 'react'

function Background() {
    return (
        <div className='w-full fixed h-screen z-[2]'>
            <div className='w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold'>Documents</div>
            <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none font-semibold tracking-tight text-zinc-900 font-[anz]'>DOCS.</h1>
        </div>
    )
}

export default Background