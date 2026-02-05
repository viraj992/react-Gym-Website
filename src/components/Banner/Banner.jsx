import React from 'react'
import { motion } from 'framer-motion';
import { SlideUp } from '../../utility/animation';

function Banner({image,title, subtitle, link}) {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24'>
        <div className='bg-[#f9f9f9] grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-2xl'>
           {/* Banner Image Section */}
           <div className="flex justify-center items-center">
            <motion.img
              initial={{opacity:0 , scale: 0.5}}
              whileInView={{opacity:1, scale:1}}
              transition={{type:"spring" , stiffness:100, delay: 0.2}}
            src={image} className='w-85 md:max-w-100 xl:max-w-150 h-full object-cover'/>
           </div>

           {/* Banner Text Section */}
           <div className='flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-125'>
            <motion.p 
              variants={SlideUp(0.5)}  initial="hidden" whileInView={"visible"} view={{once:true}}
            className="text-2xl lg:text-4xl font-bold capitalize font-playfair">{title}
            </motion.p>
            <motion.p 
             variants={SlideUp(0.7)}
              initial="hidden"
              whileInView={"visible"}
              view={{once:true}}
            className='text-justify'>{subtitle}
            </motion.p>
            {/* button  */}
            <motion.div 
              variants={SlideUp(0.8)}
              initial="hidden"
              whileInView={"visible"}
              view={{once:true}}
            className='flex justify-center md:justify-start'>
              <button className='bg-primary text-white font-semibold py-3 px-6 rounded-md hover:scale-110! duration-100 flex items-center gap-2'>Explore more</button>
            </motion.div>
           </div>

        </div>
    </div>
  )
}

export default Banner