import { FaPlay } from "react-icons/fa";
import HeroImg from "../../assets/dumbell.png"
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../utility/animation";

export default function Hero(){
    return(
        <>
         <section className="">
            <div className="container grid grid-cols-1 md:grid-cols-2 min-h-screen relative">
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
                    src={HeroImg} className="w-full max-w-100 md:max-w-125 xl:max-w-175 object-contain filter drop-shadow-[-6px_8px_15px_rgba(0,0,0,0.2)]"/>
                </div>
                
            </div>
         </section>
        </>
    );
}