import { FaPlay } from "react-icons/fa";
import HeroImg from "../../assets/dumbell.png"
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../utility/animation";

export default function Hero(){
    return(
        <>
         <section>
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 grid grid-cols-1 md:grid-cols-2 min-h-162.5 relative">
                {/* Brand info */}
                <div className="flex flex-col justify-center py-14 md:py-0 font-playfair">
                    <div className="text-center md:text-left space-y-6">
                        <motion.h1
                          variants={SlideRight(0.6)} initial="hidden" animate="visible" 
                        className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal ">Gym Gives you the perfect <span className="text-primary">Health</span>{" "}
                        </motion.h1>

                        <motion.p 
                          variants={SlideRight(1.2)} initial="hidden" animate="visible" 
                        className="text-gray-600 xl:max-w-125">
                            It is a long established fact that a reader will be by readable content of a page when are the best product.
                        </motion.p>

                        {/* Button section */}
                        <motion.div 
                          variants={SlideRight(1.5)} initial="hidden" animate="visible" 
                        className="flex justify-center items-center gap-8 md:justify-start mt-4!">
                            <button className="bg-primary text-white font-semibold py-3 px-6 rounded-md hover:scale-110! duration-100 flex items-center gap-2">{" "}Order now</button>
                            <button className="flex justify-center items-center gap-2"> <FaPlay/> Watch now</button>
                        </motion.div>
                    </div>
                    
                </div>
                {/* Hero Image */}
                <div className="flex justify-center items-center">
                    <motion.img 
                      initial={{ x: 200, rotate: 45, opacity: 0 }}
                      animate={{ x: 0, rotate: 0, opacity: 1 }}
                      transition={{ duration: 1.3, ease: "easeOut" }}
                    src={HeroImg} className="w-87.5 md:w-137.5 xl:w-175 filter drop-shadow-[-6px_8px_15px_rgba(0,0,0,0.2)]"/>
                </div>
                
            </div>
         </section>
        </>
    );
}