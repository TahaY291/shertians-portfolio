import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import {motion} from 'framer-motion'

function Card({data, reference}) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} className='relative flex-shrink-0 w-48 overflow-hidden py-10 px-5 h-60 rounded-[50px] bg-zinc-900 text-white '>
            <FaRegFileAlt />
            <p className='text-sm text-white mt-5 font-semibold '>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full left-0'>
                <div className='flex items-center justify-between mb-2 py-3 px-8'>
                    <h5>{data.fileSize}</h5>
                    <span className='w-8 h-8 rounded-full flex items-center justify-center bg-zinc-600 cursor-pointer'>
                        {data.close ? <IoMdClose /> : <LuDownload size="1em" color='#fff' />}
                        
                    </span>
                </div>
                {data.tag.isOpen && (<div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? `bg-blue-500` : "bg-green-600"} flex items-center justify-center`}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>)}
                
            </div>
        </motion.div>
    )
}

export default Card