import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {

    const ref = useRef(null)

    const data = [
        {
            desc: "lorem is not working in react",
            fileSize: ".9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        },
        {
            desc: "lorem is not working in react",
            fileSize: ".9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        },
        {
            desc: "lorem is not working in react",
            fileSize: ".9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" }
      },
        {
            desc: "lorem is not working in react",
            fileSize: ".9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" }
        },
    ];

    return (
        <div>
            <div ref={ref} className='fixed p-5 top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap'>
                {data.map((item, index)=> (
                    <Card key={index} data={item} reference={ref} />
                ))}
            </div>
        </div>
    )
}

export default Foreground